import { FETCH_TEAMS_ERROR, FETCH_TEAMS_PENDING, FETCH_TEAMS_SUCCESS } from '../Constants/team.action.type.constants';


export  function fetchTeamsPending() {
    return {
        type: FETCH_TEAMS_PENDING
    }
}

export  function fetchTeamsSuccess(teams) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        teamsList: teams
    }
}

export  function fetchTeamsError(error) {
    return {
        type: FETCH_TEAMS_ERROR,
        error: error
    }
}