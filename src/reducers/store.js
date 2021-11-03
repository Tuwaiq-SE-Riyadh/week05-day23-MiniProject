import { createStore, combineReducers } from "redux";
import videosReducer from "./Videos/reducer";
import themeReducer from "./themes/reducer";
import watchVideoReducer from "./watchlater/reducer";
const reducer = combineReducers({
  videosReducer,
  themeReducer,
  watchVideoReducer,
});
const store = createStore(reducer);
export default store;
