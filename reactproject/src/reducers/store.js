import { createStore, combineReducers } from "redux";

import video from "./video/video"
import watchLater from "./watchLater/watchLater";
// {todosReducer} === {todosReducer: todosReducer}
const reducers = combineReducers({ video, watchLater });
const store = createStore(reducers);

export default store;
