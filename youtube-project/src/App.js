import './App.css';
import { Route } from 'react-router';
import MostPopular from './components/mostPopulars';
import NavBar from './components/navBar';
import WatchVideo from './components/watching';
import SearchPage from './components/search';
import SearchComponents from './components/searchComponents';
import WatchLaterPage from './components/watchLaterPage';


function App() {
  return (
    <>
    <div className="page">
    <NavBar/>
    <Route path="/watching" component={WatchVideo} />
    <Route path={`/watchLater`} component={WatchLaterPage} />
    <Route path="/search" component={SearchPage}/>
    <Route path="/search" component={SearchComponents}/>
    <Route exact path="/" component={MostPopular}/>
    </div>
    </>
  );
}

export default App;
