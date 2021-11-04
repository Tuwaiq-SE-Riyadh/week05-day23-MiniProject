import './App.css';
import {Route} from "react-router-dom"
import VideosList from "./components/VideosList";
import Header from './components/Header';
import VideoDetails from './components/VideoDetails';


function App() {
  return (
    <div>
      <Header/>
       <VideoDetails/>
      <Route exact path="/" component={VideosList} />
  
    </div>
  );
}


export default App;
