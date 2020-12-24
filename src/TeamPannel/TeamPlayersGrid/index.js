
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import API from "../../API";
import Table from 'react-bootstrap/Table';
import PlayersGridRow from '../PlayersGridRow/index';
import Badge from 'react-bootstrap/Badge';
import addImg from '../../Images/add.png';
import Image from 'react-bootstrap/Image';
import { loadTeamRoles } from '../../Actions/team.actions';
import { useSelector, useDispatch, useStore, shallowEqual} from 'react-redux';

function TeamPlayersGrid({teamId, editMode, applyChanges}){
    const [teamPlayers, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isGridUpdated, setUpdated] = useState(false);
    const teamRoles = useSelector(state => state.teamReduser.teamRoles, shallowEqual);
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const changedPlayersData = (modifyedPlayerId, isRoleChanged, roleId) => {
        let player = teamPlayers.find(item => item.id === modifyedPlayerId);
        player.modifyed = isRoleChanged;
        player.changedRoleId = roleId;
        applyChanges(teamPlayers);
    }
    useEffect(() => {
        async function LoadUsers(){
            await API.get(`https://localhost:5001/api/Teams/GetTeamMembers/${teamId}`)
            .then(function(response){
                if(response.status === 200){
                    setUsers(response.data);
                    setLoading(false);
                }
            }).catch(function(error){
                addToast(`Internal server error: ${error}`, {
                    appearance: 'error',
                    autoDismiss: true,
                  })
            });
        }
        async function LoadTeamRoles() {
            if(editMode) {
                await dispatch(loadTeamRoles())
                .then(() => {
                    setLoading(false);
                }).catch(function(error){
                    addToast(`Internal server error: ${error}`, {
                        appearance: 'error',
                        autoDismiss: true,
                      })
                });
            }
        }
        LoadUsers();
        LoadTeamRoles();
    }, [isGridUpdated])
    return(
        <div className={editMode ? 'team-players-grid-edit' : 'team-players-grid'}>
        {editMode ?
            <div className='team-players-label'>
                <div className='team-players-label-text'>Edit Team Members:
                    <Image src={addImg} className='icon-img add-player-btn' title="Add player to the Team" />
                </div>
            </div>
            :
            <div className='team-players-label'>Team Members:</div>
        }
        { isLoading ? 
            <div className='spinner'>
                <Spinner animation="border" variant="warning" />
            </div>
        :
          teamPlayers.length > 0 ?
          <>
                <Table striped bordered hover size="sm" >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>T-Shirt size</th>
                    {editMode ? <th></th> : null}
                </tr>
                </thead>
                <tbody>
                {teamPlayers.map((player) => {
                    return(
                    <PlayersGridRow player={player} key={player.id} editMode={editMode} teamRoles={teamRoles} updateGrid={() => setUpdated(!isGridUpdated)} applyChanges={changedPlayersData} />
                    );
                })}

                </tbody>
                </Table>
            </>
            :
                <h4><Badge variant="primary">No Team Members</Badge></h4>
            
        }
        </div>
    );
}

export default TeamPlayersGrid;