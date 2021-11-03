import { createStore, combineReducers } from "redux";

import videosReducer from "./user/reducer";
// {todosReducer} === {todosReducer: todosReducer}
const reducers = combineReducers({ videosReducer});
const store = createStore(reducers);

export default store;