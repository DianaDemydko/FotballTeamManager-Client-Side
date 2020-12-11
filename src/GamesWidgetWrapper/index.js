import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../Images/game-img.png';
import { useHistory } from 'react-router-dom';

function GameWidgetWrapper() {
    const history = useHistory();
    return(
        <div className='game-widget-wrapper'>
           <Card style={{ width: '30rem' }}>
                <Card.Img className='team-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Manage your games</Card.Title>
                    <Card.Text>
                    Create a game, manage it and follow state
                    </Card.Text>
                    <Button className="team-widget-button" variant="outline-warning" onClick={() => history.push('/games')}>Go to Games</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default GameWidgetWrapper;