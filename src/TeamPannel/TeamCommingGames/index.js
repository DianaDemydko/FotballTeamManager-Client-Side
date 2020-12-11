
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';

function TeamCommingGames({teamId}){
    const [teamCommingGames, setGames] = useState([]);
    const [isLoading, setloading] = useState(true);
    return(
        <div className='team-comming-games-wrapper'>
            <div className='team-games-label'>Comming Team Games:</div>
            {teamCommingGames.length > 0
                ?
                    <div>Here must be games</div>
                : 
                    <h4 className='badge-label'><Badge variant="warning">No Comming Games</Badge></h4>
            }
        </div>
    );
}

export default TeamCommingGames;