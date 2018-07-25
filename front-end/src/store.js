import { createStore, applyMiddleware, compose } from 'redux'; //bringing in redux //COMPOSE IS FROM REDUX
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //CALLING FROM REDUCES/INDEX.JS IS THE ROOT ONE

const initialState = {};

const middleware = [thunk]; //set this to an array thunk/any other middleware we bring in will get added to the array

const store = createStore(
  //these are part of redux (create store and apply middleware)
  rootReducer,
  initialState,
  compose(
    //COMPOSE IS
    applyMiddleware(...middleware),
    compose
  )
);

export default store;
