import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../Images/game-img.png';
import {useState, useEffect} from 'react';

function GameWidgetWrapper(props) {
    const [performRedirect, setRedirect] = useState(false);
    useEffect(() => {
        if(performRedirect) {
            props.moveToComponent();
        }
    }, [performRedirect]);
    return(
        <div className='game-widget-wrapper'>
           <Card style={{ width: '30rem' }}>
                <Card.Img className='team-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Manage your games</Card.Title>
                    <Card.Text>
                    Create a game, manage it and follow state
                    </Card.Text>
                    <Button className="team-widget-button" variant="outline-warning" onClick={() => setRedirect(true)}>Go to Games</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default GameWidgetWrapper;