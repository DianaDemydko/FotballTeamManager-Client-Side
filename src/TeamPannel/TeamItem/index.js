
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import TeamInfo from '../TeamInfo/index';
import editImage from '../../Images/edit-pencil.png';
import TeamEditModal from '../TeamEditModal/index';
import { useSelector, useDispatch, useStore, shallowEqual} from 'react-redux';
 
function TeamItem({item: {id, name}}){
    const [openTeamInfo, setOpenInfo] = useState(false);
    const [openEditModal, setOpenModal] = useState(false);
    const onHideModalHandler = () => {
        setOpenModal(false);
        window.location.reload();
    }
    return(
        <div className='team-item-wrapper'>
            <div className='team-item-btn-group'>
                <Button variant="info" size="lg" block onClick={() => setOpenInfo(!openTeamInfo)}>
                    {name}
                </Button>
                <Image className='pencil' src={editImage} onClick={()=> setOpenModal(true)}/>
            </div>
            <TeamEditModal show={openEditModal} onHide={()=>onHideModalHandler()} teamId={id} teamName={name} />
            <Collapse in={openTeamInfo}>
               <div>
                   <TeamInfo teamId={id}/>
               </div>
             </Collapse>
        </div>
    );
}

export default TeamItem;