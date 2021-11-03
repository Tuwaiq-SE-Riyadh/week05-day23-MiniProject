import { createStore, combineReducers } from "redux";
import mostPopularReducer from "./mostPopular/MostPopularRed";
import Video from "./video/videoReducer";
import Search from "./search/searchReducer";
import WatchLater from "./watchLater/watchLaterReducer";

const reducers = combineReducers({mostPopularReducer, Video,Search,WatchLater})

const store = createStore(reducers);

export default store