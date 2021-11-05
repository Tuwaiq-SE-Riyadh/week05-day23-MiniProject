import "./App.css";
import Youtube from "./components/Youtube";
import { Route } from "react-router-dom";
import SearchVideos from "./components/Header/SearchVideos";
import VideoDetails from "./components/VideoDetails";
import NavBar from "./components/Header/NavBar";
import WatchLater from "./components/WatchLater";

//import { IconName } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <WatchLater />
      <Route exact path="/" component={SearchVideos} />
      <Route exact path="/" component={Youtube} />
      <Route exact path="/VideoDetails/:id" component={VideoDetails} />
    </div>
  );
};

export default App;
