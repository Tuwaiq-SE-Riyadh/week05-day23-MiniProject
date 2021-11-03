import { createStore, combineReducers } from "redux";

import videosReducer from "./videos/reducer";
import listvideosReducer from "./watchlater/reducer"

const reducers = combineReducers({videosReducer, listvideosReducer});

const store = createStore(reducers);

export default store;
