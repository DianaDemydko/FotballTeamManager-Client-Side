import {
    fetchGamesError,
    fetchGamesPending,
    fetchGamesSuccess
} from './Creators/game.action.creator';

import API from '../API';

export function LoadGames() {
    return async dispatch => {
        dispatch(fetchGamesPending());
        await API.get('https://localhost:5001/api/Game/GetGames')
            .then((response) => {
                if(response.status === 200) {
                    dispatch(fetchGamesSuccess(response.data));
                }
            })
            .catch((error) => {
                dispatch(fetchGamesError(error));
            })
    }
}