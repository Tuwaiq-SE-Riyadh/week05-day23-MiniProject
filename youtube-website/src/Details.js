import {  useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {watchLater} from "./videos";
import { useDispatch } from "react-redux";


function Details() {
    const dispatch = useDispatch();

    const [video, setVideo] = useState();
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyA533O9cIgLG1BZMQVxvx0WlUUD7hxB1yI`)
        .then((response) => setVideo(response.data.items[0]))
        .catch((error) => console.log(error))
    },[])
    console.log(video)
    const link = "https://www.youtube.com/embed/"
    return (

    <div>
        
      {video ? (
        <div>      
          <iframe width="420" height="345" src={link + id}></iframe>
     
          <p>{video.snippet.title}</p>
          <p>{video.snippet.publishedAt}</p>
          <p>{video.snippet.channelId}</p>
          <p>{video.snippet.description}</p>

          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}

      <button type="button" onClick={() => {

          
          dispatch(watchLater(video))
          history.push("/watchLater")
          }}>Watch later</button>

    </div>
  );
}

export default Details;