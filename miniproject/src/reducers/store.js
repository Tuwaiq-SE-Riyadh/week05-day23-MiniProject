import { createStore, combineReducers } from "redux";

import videosReducer from "./video/videoReducer";


const reducers = combineReducers({ videosReducer });
const store = createStore(reducers);

export default store;