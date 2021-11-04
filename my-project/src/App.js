import "./App.css";
import Youtube from "./components/Youtube";
import { Route } from "react-router-dom";
import SearchVideos from "./components/SearchVideos";
import VideoDetails from "./components/VideoDetails";
import NavBar from "./components/NavBar";
import WatchLater from "./components/WatchLater";

const App = () => {
  return (
    <div>
      <NavBar />
      <WatchLater />
      <Route exact path="/" component={SearchVideos} />
      <Route exact path="/" component={Youtube} />
      <Route exact path="/VideoDetails/:id" component={VideoDetails} />
    </div>
  );
};

export default App;
