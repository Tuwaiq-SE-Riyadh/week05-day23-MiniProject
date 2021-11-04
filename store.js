import { createStore, combineReducers } from "redux";
import vidReducer from "./videos/reducer";
import VideosReduser from "./watchLater/reducer"
const reducers = combineReducers({vidReducer});

const store = createStore(reducers);

export default store;
