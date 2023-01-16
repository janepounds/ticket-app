import {GET_TICKETS} from './actions';
const initialState = {
  tickets: [],
  favorites: [],
};
function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return {...state, tickets: action.payload};
    default:
      return state;
  }
}
export default ticketsReducer;