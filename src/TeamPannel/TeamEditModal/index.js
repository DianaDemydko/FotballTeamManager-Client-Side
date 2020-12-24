import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../../API';
import { useToasts, ToastProvider } from 'react-toast-notifications';
import { FormGroup } from 'react-bootstrap';
import TeamPlayersGrid from '../TeamPlayersGrid/index';


function TeamEditModal(props) {
    const {show, onHide, teamId, teamName} = props;
    const { addToast } = useToasts();
    const [teamPlayersToChange, setTeamPlayers] = useState({});
    const saveChanges = () => {
        teamPlayersToChange.map((player) => {
            if(player.modifyed) {
                    API.patch(`https://localhost:5001/api/Teams/ChangePlayerRole/${player.id}/${player.changedRoleId}`).then((responce) => {
                    if(responce.status === 200) {
                        addToast(`Player role was updated for ${player.name} ${player.surname}`, {
                            appearance: 'success',
                            autoDismiss: true,
                        });
                    }
                })
                .catch((err) => {
                    addToast(`Internal server error while updating player role: ${err}`, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                })
            }
        })
    }
    const changedPlayersInfo = (teamPlayers) => {
        setTeamPlayers(teamPlayers);
    }
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="team-edit-modal"
            centered
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className='edit-team-wrapper'>
                <div className='edit-team-name-wrapper'>
                    <Form.Group controlId='edit-team-name'>
                        <Form.Label>Team Name:</Form.Label>
                        <Form.Control defaultValue={teamName}/>
                    </Form.Group>
                </div>
                <div className='edit-team-members-wrapper'>
                    <TeamPlayersGrid teamId={teamId} editMode={true} applyChanges={changedPlayersInfo} />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={saveChanges}>Save</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default TeamEditModal;