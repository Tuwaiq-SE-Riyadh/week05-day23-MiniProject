
import { createStore, combineReducers } from "redux";

import vedioReducer from "./reducer";

// {todosReducer} === {todosReducer: todosReducer}
const reducers = combineReducers({ vedioReducer });
const store = createStore(reducers);

export default store;
