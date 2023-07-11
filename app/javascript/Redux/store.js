import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducer';

const reducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({
  reducer,
});

export default store;