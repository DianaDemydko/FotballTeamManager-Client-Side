import {
    FETCH_GAMES_ERROR,
    FETCH_GAMES_PENDING,
    FETCH_GAMES_SUCCESS
} from '../Actions/Constants/game.action.type.constants';

const initialState = {
    gamesList: [],
    error: null,
    pending: false
}

export default function gameReduser(state = initialState, action) {
    switch(action.type) {
        case FETCH_GAMES_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_GAMES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        case FETCH_GAMES_SUCCESS: 
            return {
                ...state,
                pending: false,
                gamesList: action.gamesList
            };
        default:
            return state;
    }
}