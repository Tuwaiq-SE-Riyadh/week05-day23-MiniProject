import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "./reducers/videos/actions";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

import './App.css';

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) =>{
    return{
      listsss:state.videosReducer.videos,
    }
  });


  let API_KEY = "AIzaSyAYivC7LcSkUkzdmaGWoZs1dESsx42-htk"
  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=${API_KEY}`)
    .then((response)=>{
      // console.log(response)
      dispatch(setVideos(response.data.items));
    })
    .catch((err)=>console.log(err))
  },[])



  return (
    <div className="appDiv">
      <Navbar />
      <Body />
      {/* {console.log(state.listsss)} */}
    </div>
  );
}

export default App;
