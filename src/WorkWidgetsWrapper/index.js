
import React from 'react';
import './index.css';
import TeamWidgetWrapper from '../TeamWidgetWrapper/index';
import GameWidgetWrapper from '../GamesWidgetWrapper/index';

function WorkWidgetsWrapper() {
    return(
        <div className='work-widgets-wrapper'>
                <TeamWidgetWrapper />
                <GameWidgetWrapper />
        </div>
    );

}

export default WorkWidgetsWrapper;