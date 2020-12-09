
import React from 'react';
import './index.css';
import {useState} from 'react';

function StartWrapper() {
    const [isStarted, setIsStarted] = useState(false);
    return(
        <div className='main-content-wrapper'>
            {!isStarted
            ? 
                <>
                    <h1>Manage your football team</h1>
                    <button className='start-button' onClick={() => setIsStarted(true)}><span>Start</span></button>
                </>
            :
                <>
                    <p>You are started!</p>
                </>
            }
        </div>
    );

}

export default StartWrapper;