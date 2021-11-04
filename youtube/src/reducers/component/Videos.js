import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import Video from './Video';
import { setVideos } from '../videos/Action';
import { useState } from "react";
import './Video.css';
import Search from './Srearch'


const Videos= ()=>{
    
const dispatch=useDispatch();
const state =useSelector((state)=>{
    return{
        videos: state.videoReducer.videos,   
    }
})
useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyDQMmZy80prLXQwGQumKmxRELmsfdzqBa8")
      .then((response) => {
        const action = setVideos(response.data.items);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

return(
    <>
      {/* < Search/>   */}
      <div className="grid"> 
 {state.videos.map((element,index)=>{
             return   (
             <>
             <Video video={element} id={element.id.videoId}/>
             </>
             )
         })}
         </div>

       

    </>
)
}
export default Videos;
