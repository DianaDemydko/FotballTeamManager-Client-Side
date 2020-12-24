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


function TeamEditModal(props) {
    const {show, onHide, teamId, teamName} = props;
    const [updatedTeamName, setTeamName] = useState(teamName);
    const { addToast } = useToasts();
    const [teamPlayersToChange, setTeamPlayers] = useState({});
    const saveChanges = () => {
        if(teamName !== updatedTeamName && !isEmpty(updatedTeamName)) {
            API.patch(`https://localhost:5001/api/Teams/ChangeTeamName/${teamId}/${updatedTeamName}`)
            .then((response) => {
                if(response.status === 200) {
                    addToast(`Team name was updated`, {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                }
            })
            .catch((error) => {
                addToast(`Internal server error while updating team name: ${error}`, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
        } else {
            addToast(`Team name cannot be empty`, {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
        if (!isEmpty(teamPlayersToChange)) {
            teamPlayersToChange.map((player) => {
                if(player.modifyed) {
                        API.patch(`https://localhost:5001/api/Teams/ChangePlayerRole/${player.id}/${player.changedRoleId}`).then((response) => {
                        if(response.status === 200) {
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
            });
        }
    }
    const teamNameChangehandler = (event) => {
        setTeamName(event.target.value);
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