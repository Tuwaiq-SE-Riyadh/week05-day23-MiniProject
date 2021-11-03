import { createStore, combineReducers } from "redux";
import Watches from "./watch_later/watch_later";

const red = combineReducers({ Watches });
const store = createStore(red);

export default store;
