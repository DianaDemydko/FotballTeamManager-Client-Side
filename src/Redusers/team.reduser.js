
import { 
    FETCH_TEAMS_ERROR, 
    FETCH_TEAMS_PENDING, 
    FETCH_TEAMS_SUCCESS, 
    FETCH_TEAM_MEMBERS,
    SET_SELECTED_TEAM
} from '../Actions/Constants/team.action.type.constants';

const initialState = {
    teamsList: [],
    selectedTeamId: null,
    selectedTeamMembers: [],
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
        case FETCH_TEAM_MEMBERS:
            return {
                ...state,
                pending: false,
                selectedTeamMembers: action.teamMembers
            }
        case SET_SELECTED_TEAM:
            return {
                ...state,
                selectedTeamId: action.selectedTeamId
            }
        default: 
            return state;
    }
  };
  
export default teamReduser;