// import { useEffect, useState,useHistory } from "react";
import {  useHistory } from "react-router";
import {watchvideo}from "../reducers/youtube/actions"
import { useDispatch } from "react-redux";
const Home=({videos})=>{
    const history = useHistory();
    const dispatch = useDispatch();
    
       const url="https://www.youtube.com/embed/"
        return (
        <div className="video col-md-4 mb-3"> 
            <iframe width="100%" height="315"
            src={url+videos.id.videoId}>
                
            </iframe> 
   
            <div className="text-center">
                <button  className="btn btn-secondary me-2" onClick={() => {history.push(`/Watchvidio/`)}}> Watch Later</button>
                <button  className="btn btn-info" onClick={() => {history.push(`/VideoDetail/${videos.id.videoId}`)}}> Details</button>
            </div>
        </div>
        )
}


export default Home