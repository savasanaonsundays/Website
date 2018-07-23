import isEmpty from '../validation/is-empty'; //!!!!!UNCOMMENT

import { SET_CURRENT_ADMIN, LOGOUT_CURRENT_ADMIN } from '../actions/types';

const initialState = {
  //CREATE AN INITIAL STATE FOR OUR AUTH REDUCER /THIS IS WHAT SHOWS UP IN REDUX DEV TOOL WHEN YOU CLICK ON STATE
  isAuthenticated: false,
  admin: {}
};

export default function(state = initialState, action) {
  //EVERY REDUCER IS GOING TO EXPORT A FUNCTION//THE FUNCTION WILL TAKE IN INITIAL STATE AND THEN AN ACTION
  switch (
    action.type //THE WAY WE TEST IS WE WILL SWITCH /THE ACTION IT HAS TO AT LEAST HAVE A TYPE/IT CAN ALSO SEND A PAYLOAD
  ) {
    case SET_CURRENT_ADMIN: //WE WANT TO TEST CASES
      return {
        //IT COULD RETURN A MODIFIED VERSION OF THE STATE, I THINK RIGHT NOW RETURNING THE STATE AS IT IS
        ...state, //RETURN CURRENT STATE
        isAuthenticated: !isEmpty(action.payload), /////!!!!!UNCOMMENT IF ITS FILLED IT SHOULD BE AUTHENTICATED
        admin: action.payload //PAYLOAD WILL INCLUDE ERRORS FROM SERVER
      };
    default:
      return state;
  }
}
