import { FETCH_TEAMS_ERROR, FETCH_TEAMS_PENDING, FETCH_TEAMS_SUCCESS } from '../Actions/Constants/team.action.type.constants';

const initialState = {
    teamsList: [],
    pending: false,
    error: null
  };
  
  function teamReduser(state = initialState, action) {
    switch(action.type) {
        case FETCH_TEAMS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                pending: false,
                teamsList: action.teamsList
            }
        case FETCH_TEAMS_ERROR:
            return {
                ...state,
                pending: true,
                error: action.error
            }
        default: 
            return state;
    }
  };

export const getTeams = () => initialState.teamsList;
export const getTeamsPending = () => initialState.pending;
export const getTeamsError = () => initialState.error;
  
export default teamReduser;