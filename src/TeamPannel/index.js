
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import API from "../API";
import TeamItem from './TeamItem/index';
import pannelIcon from '../Images/soccer-t-shirt.png';
import { useSelector, useDispatch, useStore } from 'react-redux';
import loadTeams from '../Actions/team.actions';
import {getTeams, getTeamsPending, getTeamsError } from '../Redusers/team.reduser';

function TeamPannel(){
    const teams = useSelector(state => state.teamReduser.teamsList);
    const error = useSelector(state => state.teamReduser.error);
    const pending = useSelector(state => state.teamReduser.pending);
    const [isLoading, setLoading] = useState(true);
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    useEffect(() => {
        async function LoadTeams(){
            await dispatch(loadTeams()).then(() => {
                    setLoading(false);
            });
            
           
        }
        LoadTeams();
    }, [dispatch]);
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