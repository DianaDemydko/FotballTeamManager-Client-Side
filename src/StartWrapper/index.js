
import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useStore, useSelector, shallowEqual } from 'react-redux';

function StartWrapper() {
    const history = useHistory();
    const goToHomePage = () => history.push('/home');
    return(
        <div className='main-content-wrapper'>
            <h1>Manage your football team</h1>
            <Button variant="success" className="start-button" onClick={goToHomePage}>Start</Button>
        </div>
    );

}

export default StartWrapper;