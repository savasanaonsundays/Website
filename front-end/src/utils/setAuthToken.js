import axios from 'axios'; //YOU CAN SET A DEFAULT HEADER IN AXIOS. YOU CANT WITH FETCH

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header//IF THE TOKEN ISNT THERE WE WANT TO DELETE THE AXIOS HEADER
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
