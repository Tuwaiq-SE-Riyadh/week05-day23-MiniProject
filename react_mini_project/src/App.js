import { useState, useEffect } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import AllVideo from "./components/AllVideo";
import './App.css';

function App() {
  const [allVideos, setAllVideos] = useState([]);
  const [videos, setVideos] = useState("");
  let arr1 =[]

  const changeText = (e) => {
    const value = e.target.value;
    setVideos(value)

  };

  const getSearch1 = () => {
    
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${videos}&key=AIzaSyDoqqSAC4vyVNvmzcRT7xtEjgcT3D1T3rM`)
      .then((response) => setAllVideos(response.data.items)) //response.data.items[0].snippet.thumbnails.high.url
      .catch((error) => console.log(error));


};

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&chart=mostPopular&key=AIzaSyDoqqSAC4vyVNvmzcRT7xtEjgcT3D1T3rM")
      .then((response) => setAllVideos(response.data.items)) //response.data.items[0].snippet.thumbnails.high.url
      .catch((error) => console.log(error));
  },[]);
  
  return (
    
    <div className="App">
      <br/>
      <input onChange={changeText} type="text" placeholder="Search.."/>
      <button onClick={getSearch1} type="submit">Submit</button>
      <br/>
      <br/>

      
      <br/>
      <AllVideo allVideos={allVideos} setAllVideos={setAllVideos}/>
    </div>
  );
}



export default App;
