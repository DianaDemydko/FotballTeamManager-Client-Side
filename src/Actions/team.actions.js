import { 
    fetchTeamsPending, 
    fetchTeamsSuccess, 
    fetchTeamsError, 
    fetchTeamRoles
} from './Creators/team.actions.creator';

import API from '../API';

export function loadTeams() {
    return async dispatch => {
        dispatch(fetchTeamsPending());
        await API.get('https://localhost:5001/api/Teams/GetTeams')
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

export function loadTeamRoles() {
    return async dispatch => {
        dispatch(fetchTeamsPending());
        await API.get('https://localhost:5001/api/Teams/GetTeamRoles')
        .then((responce) => {
            if(responce.status === 200) {
                dispatch(fetchTeamRoles(responce.data));
            }
        })
        .catch((error) => {
            dispatch(fetchTeamsError(error));
        })
    }
}