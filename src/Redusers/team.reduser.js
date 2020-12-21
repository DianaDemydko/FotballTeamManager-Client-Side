
import { 
    FETCH_TEAMS_ERROR, 
    FETCH_TEAMS_PENDING, 
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAM_ROLES
} from '../Actions/Constants/team.action.type.constants';

const initialState = {
    teamsList: [],
    pending: false,
    error: null,
    teamRoles: []
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
        case FETCH_TEAM_ROLES:
            return {
                ...state,
                teamRoles: action.teamRoles
            }
        default: 
            return state;
    }
  };
  
export default teamReduser;