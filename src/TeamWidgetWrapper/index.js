import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../Images/team-img.png';
import {useState, useEffect} from 'react';

function TeamWidgetWrapper(props) {
    const [performRedirect, setRedirect] = useState(false);
    useEffect(() => {
        if(performRedirect) {
            props.moveToComponent();
        }
    }, [performRedirect]);
    return(
        <div className='team-widget-wrapper'>
            <Card style={{ width: '30rem' }}>
                <Card.Img className='team-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Manage your football teams</Card.Title>
                    <Card.Text>
                    See and manage your players in selected team
                    </Card.Text>
                    <Button className="team-widget-button" variant="outline-success" onClick={() => setRedirect(true)}>Go to Teams</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default TeamWidgetWrapper;