import "./App.css";
import { Route } from "react-router-dom";
import Todos from "./components/Youtubelist";
import VideoDetails from "./components/VideoDetail";
import Youtubelist from "./components/Youtubelist";
import Home from "./components/Home";
import Search from "./components/Search"
import { createContext } from "react";
import Navbar from "./components/Navbar" 
import Watchvideo from "./components/Watchvideo";

export const VideoContext =createContext()

const App = () => {
  return (
    <div>
      <Navbar  />
      <Route exact path="/" component={Youtubelist} />
      <Route  path="/Search" component={Search} />
      <Route  path="/VideoDetail/:id" component={VideoDetails} />
      <Route path="/Watchvideo/:id" component={Watchvideo}/>


   
    </div>
  );
}

export default App;
