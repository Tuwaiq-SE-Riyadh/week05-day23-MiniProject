import { createStore, combineReducers } from "redux";

import videos from "./videos";

const reducers = combineReducers({ videos });

const store = createStore(reducers);

export default store;