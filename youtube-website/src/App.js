import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Details from './Details';
import WatchLater from './WatchLater';
import {addVideos} from './videos';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();

function App() {

  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {

    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyA533O9cIgLG1BZMQVxvx0WlUUD7hxB1yI")
    .then((response) => dispatch(addVideos(response.data.items)))
    .catch((error) => console.log(error))
  },[])

  return (
    <div className="App">

            <Navbar />
      <Route exact path="/" component={Home} />
      <Route  exact path="/search" component={Search} />
      <Route exact path="/details/:id" component ={Details} />
      <Route exact path="/watchLater" component ={WatchLater} />
      
    </div>
  );
}

export default App;



