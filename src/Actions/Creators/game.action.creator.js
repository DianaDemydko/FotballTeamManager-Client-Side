import { 
    FETCH_GAMES_ERROR, 
    FETCH_GAMES_PENDING, 
    FETCH_GAMES_SUCCESS
} from '../Constants/game.action.type.constants';


export  function fetchGamesPending() {
return {
    type: FETCH_GAMES_PENDING
}
}

export  function fetchGamesSuccess(games) {
return {
    type: FETCH_GAMES_SUCCESS,
    gamesList: games
}
}

export  function fetchGamesError(error) {
return {
    type: FETCH_GAMES_ERROR,
    error: error
}
}