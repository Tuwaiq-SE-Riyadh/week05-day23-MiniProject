import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Details from './Details';
// import Details from './Details'
import {addVideos} from './videos';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Details from './Details';

export const UserContext = createContext();

function App() {

  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {

    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyACj28jAni3rr2G2iXY_hotZ94NH6NNoY0")
    .then((response) => dispatch(addVideos(response.data.items)))
    .catch((error) => console.log(error))
  },[])

  return (
    <div className="App">

            <Navbar />
      <Route exact path="/" component={Home} />
      <Route  exact path="/search" component={Search} />
      <Route exact path="/details/:id" component ={Details} />
      {/* <Details/> */}
      
    </div>
  );
}

export default App;



