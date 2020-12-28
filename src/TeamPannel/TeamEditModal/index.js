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
import { isEmpty } from 'lodash';
import { Provider } from 'react-redux';


function TeamEditModal(props) {
    const {show, onHide, teamId, teamName, updateTeamItem} = props;
    const [updatedTeamName, setTeamName] = useState(teamName);
    const { addToast } = useToasts();
    const [teamPlayersToChange, setTeamPlayers] = useState({});
    const saveChanges = () => {
        let promisesArray = [];
        let toastMessages = [];
        if(!isEmpty(updatedTeamName)) {
            if(teamName !== updatedTeamName) {
                const teamNameUpdatePromise = API.patch(`https://localhost:5001/api/Teams/ChangeTeamName/${teamId}/${updatedTeamName}`);
                toastMessages.push('Team name was updated');
                promisesArray.push(teamNameUpdatePromise);
            }
        } else {
            addToast(`Team name cannot be empty`, {
                    appearance: 'warning',
                    autoDismiss: true,
            });
        }
        if (!isEmpty(teamPlayersToChange)) {
            teamPlayersToChange.map((player) => {
                if(player.modifyed) {
                    promisesArray.push(API.patch(`https://localhost:5001/api/Teams/ChangePlayerRole/${player.id}/${player.changedRoleId}`));
                    toastMessages.push(`Player role was updated for ${player.name} ${player.surname}`);
                }
            });
        }
        Promise.all(promisesArray)
        .then((response) => {
            let passCheck = true;
            response.forEach((promise) => {
                if(promise.status !== 200) {
                    passCheck = false;
                }
            });
            if(passCheck) {
                toastMessages.map((message) => {
                    addToast(message, {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                });
                closeModal();
                setTeamPlayers({});
            }
        })
        .catch((error) => {
            addToast(`Internal server error while provide updating: ${error}`, {
                appearance: 'error',
                autoDismiss: true,
            });
        });
    }
    const teamNameChangehandler = (event) => {
        setTeamName(event.target.value);
    }
    const changedPlayersInfo = (teamPlayers) => {
        setTeamPlayers(teamPlayers);
    }
    const closeModal = () => {
        updateTeamItem();
        onHide();
    }
    return(
        <Modal
            show={show}
            onHide={closeModal}
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
                        <Form.Control defaultValue={updatedTeamName} onChange={teamNameChangehandler}/>
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