
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import API from "../API";
import TeamItem from './TeamItem/index';
import pannelIcon from '../Images/soccer-t-shirt.png';

function TeamPannel(){
    const [teams, setTeams] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { addToast } = useToasts();
    useEffect(() => {
        async function LoadTeams(){
            await API.get('https://localhost:44386/api/Teams/GetTeams')
            .then(function (response) {
                if(response.status === 200) {
                    setTeams(response.data);
                    setLoading(false);
                }
              })
              .catch(function (error) {
                addToast(`Internal server error: ${error}`, {
                    appearance: 'error',
                    autoDismiss: true,
                  })
              });
        }
        LoadTeams();
    }, []);
    return(
        <>
            <div className='pannel-label'>
                <img src={pannelIcon} className='pannel-label-image'/>
                <h1>Football Teams</h1>
            </div>
            <div className='team-pannel-wrapper'>
            {isLoading ? 
                <div className='spinner'>
                    <Spinner animation="border" variant="warning" /> 
                </div>
            : 
                teams.map((team) => {
                    return <TeamItem item={team} key={team.id} />
                })
            }
            </div>
        </>
    );
}

export default TeamPannel;