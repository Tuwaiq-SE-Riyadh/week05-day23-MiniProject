
import './App.css';
import Search from "./components/search";
import Videos from './components/Videos ';
import { Route } from "react-router-dom";
import PageDetalis from './components/PageDetalis'
import WatchLater from './components/WatchLater'
function App() {
  return (
    <div className="App">
   <Route exact path="/" component={Search} />
   <Route exact path="/" component={Videos} />
   <Route path="/Videos/PageDetalis/:id" component={PageDetalis} />
   <Route path="/WatchLater" component={WatchLater} />
      {/* <Search/>
     <Videos/> */}
    </div>
  );
}

export default App;
