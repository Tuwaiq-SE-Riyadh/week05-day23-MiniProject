import './App.css';
import { Route } from "react-router-dom";
import Videos from './reducers/component/Videos';
import videoDetail from './reducers/component/VideoDetials'
import WatchLater from './reducers/component/WatchLater';
import Search from './reducers/component/Srearch';

function App() {
  return (
    <div className="App">
       <Route  exact path="/" component={Search} />
    <Route exact path="/" component={Videos} />
    <Route path="/video/:id" component={videoDetail} />
    <Route path="/watchlater/:id" component={videoDetail} />

    </div>
  );
}

export default App;
