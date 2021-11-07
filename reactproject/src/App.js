import './App.css';
import Home from './components/Home';
import { Route } from "react-router-dom";
import VideoDetails from './components/VideoDetails';
import WatchLater from './components/WatchLater';


// The home page should display the most popular videos from youtube api 
    //(https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=YOUR-KEY).
//>>>>>>>>>>>>>>>>>>DONE

// There should be search bar to search and display videos from youtube api 
    //(https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=hello&key=YOUR_KEY).

// When clicking on video you should go to another component and display the video and some details about 
    //the video like (title, publishedAt, channelTitle, description).

// In the video details component there should be watch later button when clicking it it will add the 
   //video to state in a reducer (using redux).

// After clicking watch later it should redirect you to another page where the watched later videos will be 
    //displaed with delete button for each one.
function App() {

  return (
    <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/video/:id" component={VideoDetails} />
        <Route path="/watchLater" component={WatchLater} />
        
    </div>
  );
}

export default App;
