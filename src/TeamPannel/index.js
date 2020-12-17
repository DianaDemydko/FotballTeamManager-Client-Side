
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import TeamItem from './TeamItem/index';
import pannelIcon from '../Images/soccer-t-shirt.png';
import { useSelector, useDispatch, useStore, shallowEqual} from 'react-redux';
import loadTeams from '../Actions/team.actions';

function TeamPannel(){
    const teams = useSelector(state => state.teamReduser.teamsList, shallowEqual);
    const error = useSelector(state => state.teamReduser.error, shallowEqual);
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
    }, [teams]);
    useEffect(() => {
        if(error !== null) {
            addToast(`Internal server error: ${error}`, {
                appearance: 'error',
                autoDismiss: true,
            });
            setLoading(true);
        }
    }, [error]);
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