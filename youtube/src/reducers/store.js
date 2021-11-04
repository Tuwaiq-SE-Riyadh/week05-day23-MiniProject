import { createStore, combineReducers } from "redux";

import videoReducer from './videos/reducer';

const reducers=combineReducers({videoReducer});
const store=createStore(reducers);

export default store;