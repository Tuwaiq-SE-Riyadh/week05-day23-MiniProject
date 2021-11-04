import "./App.css";
import { Route,Link } from "react-router-dom";
import PopularVideos from "./Components/PopularVideos";
import VideoDetails from "./Components/VideoDetails";
import Search from "./Components/Search";
import WatchLater from "./Components/WatchLater";
import { Navbar,Container } from "react-bootstrap";

const App = () => {
const style={
  color:"grey"
}
  function NavBar() {
    return (
      <div className="links">
    <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/youtube.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Mini YouTube 
      </Navbar.Brand>
      <Link to="/" style={style}>Home</Link>
      <Link to="/watchlater"style={style}>Watch later</Link>
    </Container>
    </Navbar>
       
      </div>
    );
  }
 
  return (
    <div>
      <NavBar/>
      <Search/>
      <br></br>
      <Route path="/videoDetails/:id" component={VideoDetails}/>
      <Route exact path="/" component={PopularVideos}/>
      <Route path="/WatchLater" component={WatchLater}/>
      {/* <WatchLater/> */}
    </div>
  );
}

export default App;
