import { createStore, combineReducers } from "redux";

import youtubeReducer from "./youtube/reducer";

const reducers = combineReducers({ youtubeReducer });
const store = createStore(reducers);

export default store;
