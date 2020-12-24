import { 
    fetchTeamsPending, 
    fetchTeamsSuccess, 
    fetchTeamsError, 
    fetchTeamMembers,
    setSelectedTeam
} from './Creators/team.actions.creator';

import API from '../API';

export function loadTeams() {
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

export function loadTeamMembers(teamId) {
    return async dispatch => {
        dispatch(fetchTeamsPending());
        await API.get(`https://localhost:44386/api/Teams/GetTeamMembers/${teamId}`)
        .then((responce) => {
            if(responce.status === 200) {
                dispatch(fetchTeamMembers(responce.data));
            }
        })
        .catch((error) => {
            dispatch(fetchTeamsError(error));
        })
    }
}

export function setSelectedTeamId(teamId) {
    return async dispatch => {
        await dispatch(setSelectedTeam(teamId));
    }
}