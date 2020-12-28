
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import TeamPlayersGrid from '../TeamPlayersGrid/index';
import Image from 'react-bootstrap/Image';
import teamIcon from '../../Images/team-icon.png';
import TeamCommingGames from '../TeamCommingGames/index';

function TeamInfo({teamId}){
    return(
        <div className='team-info-wrapper'>
            <div className='team-logo'>
                <div className='team-logo-label'>Team Logo:</div>
                <Image src={teamIcon} roundedCircle />
            </div>
            <TeamPlayersGrid teamId={teamId} editMode={false} />
            <TeamCommingGames teamId={teamId} />
        </div>
    );
}

export default TeamInfo;