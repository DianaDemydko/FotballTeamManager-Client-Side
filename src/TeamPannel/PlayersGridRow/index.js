
import React, { useEffect, useState } from 'react';
import './index.css';
import Badge from 'react-bootstrap/Badge';
import deleteImg from '../../Images/delete.png';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import API from '../../API';
import { useToasts } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';

function PlayersGridRow({player, editMode, teamRoles, updateGrid, applyChanges}){
    const [selectedRole, setSelectedRole] = useState(player.role);
    const { addToast } = useToasts();
    const handleRoleChange = (selectedId) => {
        let selectedTeamRole = teamRoles.find(item => item.id === parseInt(selectedId));
        setSelectedRole(selectedTeamRole);
        if(player.role.id !== parseInt(selectedId)){
            applyChanges(player.id, true, parseInt(selectedId));
        } else {
            applyChanges(player.id, false, null);
        }
    }
    const removePlayerFromTeam = async () => {
        await API.patch(`https://localhost:5001/api/Teams/RemovePlayer/${player.id}`)
        .then((responce) => {
            if(responce.status === 200) {
                addToast(`Success: You successfuly removed player from that team`, {
                    appearance: 'success',
                    autoDismiss: true,
                  });
                updateGrid();
            }
        }).catch((error) => {
            addToast(`Internal server error: ${error}`, {
                appearance: 'error',
                autoDismiss: true,
              });
        });
    }
    const removePlayerHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Do you want to remove that player from team?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              removePlayerFromTeam();
            }
          });
    }
    return(
        <>
            {!editMode ? 
            <tr>
                <td>{player.id}</td>
                <td>{player.name} {player.surname}</td>
                <td>{player.role.name}</td>
                <td>{player.tShirtSize ? <Badge variant="success" pill>{player.tShirtSize}</Badge> : <Badge variant="secondary" pill>Not Selected</Badge>}</td>
            </tr>
            : 
            <tr>
                <td>{player.id}</td>
                <td>{player.name} {player.surname}</td>
                <td>
                <DropdownButton title={selectedRole.name} id='role-dropdown'>
                    {teamRoles.map((role) => {
                        return <Dropdown.Item eventKey={role.id} key={role.id} active={selectedRole.id === role.id ? true : false} onSelect={handleRoleChange}>{role.name}</Dropdown.Item>
                    })}
                </DropdownButton>
                </td>
                <td>{player.tShirtSize ? <Badge variant="success" pill>{player.tShirtSize}</Badge> : <Badge variant="secondary" pill>Not Selected</Badge>}</td>
                {editMode ? <td><Image src={deleteImg} className='icon-img' title='Remove player from Team' onClick={removePlayerHandler} /></td> : null}
            </tr>  
            }
        </>
    );
}

export default PlayersGridRow;