import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ListItems from "./ListItems";
import './style.css';
import { setVideos } from "../reducers/video/actions";

function Home() {
 
  let newSearchValue;

  function searchValue(e){
    newSearchValue=e.target.value
  }

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      videos: state.videosReducer.videos
      
    };
  });


 
  useEffect(() => {
      axios
        .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyD_o7IZhmMnPWrzOAsboD27FsNSg7U9E4o")
        .then((response) => {
          const action = setVideos(response.data.items);
          dispatch(action);
        })
        .catch((error) => console.log(error))
    },[]);


    function searchList(){
      
      axios
        .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+newSearchValue+"&key=AIzaSyD_o7IZhmMnPWrzOAsboD27FsNSg7U9E4o")
        .then((response) => {
          console.log(response)
          const action = setVideos(response.data.items);
          dispatch(action);
        })
        .catch((error) => console.log(error))
    }
   
    
  return (
    <>
    <div class="topnav">
    <a >Home</a>
    <a ><button onClick={searchList}>Search</button></a>
    <input id="search" type="search" onChange={searchValue}  placeholder="Search.." />
    


  </div>
    <div className="main">
    {state.videos.map((element, index) => {
      return<ListItems elemnt={element}  index={index} />
      })}
      </div>

</>
  );
}

export default Home;