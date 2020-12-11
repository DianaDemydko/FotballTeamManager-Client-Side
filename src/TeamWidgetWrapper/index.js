import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../Images/team-img.png';
import { useHistory } from 'react-router-dom';

function TeamWidgetWrapper() {
    const history = useHistory();
    return(
        <div className='team-widget-wrapper'>
            <Card style={{ width: '30rem' }}>
                <Card.Img className='team-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Manage your football teams</Card.Title>
                    <Card.Text>
                    See and manage your players in selected team
                    </Card.Text>
                    <Button className="team-widget-button" variant="outline-success" onClick={() => history.push('/teams')}>Go to Teams</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default TeamWidgetWrapper;