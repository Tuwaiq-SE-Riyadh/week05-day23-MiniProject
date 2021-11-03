import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createContext } from "react";
import "./App.css";
import videosDetails from "./Components/videosDetails";
import Navigation from "./Components/Navigation";
import Topbar from "./Components/Topbar";
import Videos from "./Components/Videos";
import Search from "./Components/search";
import watchlater from "./Components/watchLater";
export const UserContext = createContext();

function App() {
  const state = useSelector((state) => {
    console.log(state);
    return {
      theme: state.themeReducer.theme,
    };
  });
  return (
    <UserContext.Provider value={state.theme}>
      <div className={`App ${state.theme}`}>
        <div className={`nav-container ${state.theme}`}>
          <Navigation />
        </div>
        <div className={`main-container  ${state.theme}`}>
          <div>
            <Topbar />
          </div>

          <div>
            <Route exact path="/" component={Videos} />
            <Route exact path="/Videos/videodetails/:id" component={videosDetails} />
            <Route exact path="/Videos/watchlater" component={watchlater} />
            <Route exact path="/Videos/search/:searchword" component={Search} />
            {/* <Videos /> */}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
