import { combineReducers } from 'redux'; //THIS IS FROM REDUX/ FOR THE SIZE OF OUR APPLICATION WE NEED MULTIPLE REDUCES
import authReducer from './authReducer'; //AUTHENTICATION
import errorReducer from './errorReducer';

export default combineReducers({
  //PUTTING AN OBJECT WITH OUR REDUCERS
  auth: authReducer, //WHEN WE USE ANYTHING FROM AUTH REDUCER IN COMPONENTS WE WILL USE THIS.PROPS.AUTH
  errors: errorReducer
});
