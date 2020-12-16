import {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError} from './Creators/team.actions.creator';
import API from '../API';

function loadTeams() {
    return async dispatch => {
        dispatch(fetchTeamsPending());
        await API.get('https://localhost:44386/api/Teams/GetTeams')
        .then((responce) => {
            if(responce.status === 200) {
                dispatch(fetchTeamsSuccess(responce.data));
            }
        })
        .catch((error) => {
            dispatch(fetchTeamsError(error));
        })
    }
}

export default loadTeams;