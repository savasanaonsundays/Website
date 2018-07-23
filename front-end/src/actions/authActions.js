//EVERYTHING WE DO IS AN ACTION / WHEN WE CLICK SUBMIT TO REGISTER A USER THAT IS A REDOX ACTION/ RIGHT NOW WE ARE MAKING THE AXIOS REQUEST DIRECTLY ON SUBMIT ISIDE THE CMPONENT AND WE DONT WANT TO DO THAT WE WANT TO DO THAT WE WANT TO CALL AN ACTION TO DO THAT
//
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_ADMIN } from './types';

// Register Admin
export const registerAdmin = (adminData, history) => dispatch => {
  axios
    .post('/api/admins/register', adminData)
    .then(res => history.push('/login')) //WILL RIDIRECT TO LOGIN
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get Admin Token// TAKE THE LOGIN STORE IT IN LOCAL STORAGE /IF YOU ARE LOGGED IN WE WILL SEND IT WITH EVERY REQUEST WE MAKE/THE LOGOUT WILL DESTROY THE TOKEN
export const loginAdmin = adminData => dispatch => {
  //WE ARE FETCHING FROM BACKEND/ WE HAVE TO WAIT FOR THE RESPONSE THEN WE HAVE TO DISPACH
  axios
    .post('/api/admins/login', adminData) //PASS IN THE USER DATA FROM BACKEND
    .then(res => {
      //GET THE RESPONCE
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token); //LOCALSTORAGE.SETITEM THIS WILL SET AN ITEM TO LOCAL STORAGE

      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get admin data
      const decoded = jwt_decode(token); //ALSO HAS THE EXPIRATION DATE
      // Set current admin
      dispatch(setCurrentAdmin(decoded));
    })
    .catch(err =>
      dispatch({
        //CAUSE MAKING AN AJAX CALL
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in admin
export const setCurrentAdmin = decoded => {
  return {
    type: SET_CURRENT_ADMIN,
    payload: decoded //THE ACUT
  };
};

// Log ADMIN out
export const logoutAdmin = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken'); //REMOVE THE TOKEN CALLED JWTTOKEN
  // Remove auth header for future requests
  setAuthToken(false); //THIS IS FROM SETAUTHTOKEN FILE
  // Set current admin to {} (AN EMPTY OBJECT) which will set isAuthenticated to false
  dispatch(setCurrentAdmin({}));
};
