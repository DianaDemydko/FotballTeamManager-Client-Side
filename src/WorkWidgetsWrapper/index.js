
import React from 'react';
import './index.css';
import TeamWidgetWrapper from '../TeamWidgetWrapper/index';
import GameWidgetWrapper from '../GamesWidgetWrapper/index';
import { useState } from 'react';

function WorkWidgetsWrapper() {
    const [selectedDisplayType, setType] = useState('nav-menu');
    console.log('Render');
    const setDisplayType = (displayType) => {
        setType(displayType);
    }
    const showNavMenu = () => {
        return (
            <div className='work-widgets-wrapper'>
                <TeamWidgetWrapper moveToComponent={() => setDisplayType('team-panel')}/>
                <GameWidgetWrapper moveToComponent={() => setDisplayType('game-panel')}/>
            </div>
        );
    }
    const showTeamPanel = () => {
        return (
            <div >
                You opened team panel!
            </div>
        );
    }
    const showGamePanel = () => {
        return (
            <div >
                You opened game panel!
            </div>
        );
    }
    const switchPanels = (displayType) => {
        var resultRender;
        switch (displayType) {
            case 'nav-menu' :
                resultRender = showNavMenu();
                break;
            case 'team-panel' :
                resultRender = showTeamPanel();
                break;
            case 'game-panel' :
                resultRender = showGamePanel();
                break;
            default:
                break;
        }
        return resultRender;
    }
    return(
            <div>
            {
            switchPanels(selectedDisplayType)
            }
            </div>
    );

}

export default WorkWidgetsWrapper;