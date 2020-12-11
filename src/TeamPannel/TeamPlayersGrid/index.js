
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import API from "../../API";
import Table from 'react-bootstrap/Table';
import PlayersGridRow from '../PlayersGridRow/index';
import Badge from 'react-bootstrap/Badge';

function TeamPlayersGrid({teamId}){
    const [teamPlayers, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { addToast } = useToasts();
    useEffect(() => {
        async function LoadUsers(){
            await API.get(`https://localhost:44386/api/Teams/GetTeamMembers/${teamId}`)
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
        LoadUsers();
    }, [])
    return(
        <div className='team-players-grid'>
        <div className='team-players-label'>Team Members:</div>
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
                </tr>
                </thead>
                <tbody>
                {teamPlayers.map((player) => {
                    return(
                    <PlayersGridRow player={player} key={player.id} />
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