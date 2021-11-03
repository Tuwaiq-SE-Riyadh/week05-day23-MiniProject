import "./App.css";
import { Route } from "react-router-dom";
import Videos from "./components/Videos";
import Header from "./components/Header";
import VideoDetails from  "./components//VideoDetails";
import Watchlater from "./components/Watchlater";


function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={Videos} />
      <Route path="/video/:id" component={VideoDetails} />
      <Route exact path="/Watchlater" component={Watchlater} />
    </div>
  );
}

export default App;
