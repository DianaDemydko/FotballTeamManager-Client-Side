
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import TeamInfo from '../TeamInfo/index';
import editImage from '../../Images/edit-pencil.png';
 
function TeamItem({item: {id, name}}){
    const [openTeamInfo, setOpen] = useState(false);
    return(
        <div className='team-item-wrapper'>
            <Button variant="info" size="lg" block onClick={() => setOpen(!openTeamInfo)}>
                {name} <Image className='pencil' src={editImage}/>
            </Button>
           <Collapse in={openTeamInfo}>
               <div>
                   <TeamInfo teamId={id}/>
               </div>
            </Collapse>
        </div>
    );
}

export default TeamItem;