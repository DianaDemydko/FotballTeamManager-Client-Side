import { combineReducers } from 'redux';
import teamReduser from './team.reduser';
import gameReduser from './game.reduser';

export default combineReducers({
    teamReduser,
    gameReduser
});