import { createStore, combineReducers } from "redux";
import detailsReducer from './reducer'

const reducers = combineReducers({ detailsReducer });
const store = createStore(reducers);

export default store