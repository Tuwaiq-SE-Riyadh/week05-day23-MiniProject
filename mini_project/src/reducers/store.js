import { createStore, combineReducers } from "redux";

import videosReducer from "./videos/reducer";

const reducers = combineReducers({ videosReducer });
const store = createStore(reducers);

export default store;