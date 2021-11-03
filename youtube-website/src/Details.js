import {  useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {watchLater} from "./videos";
import { useDispatch } from "react-redux";

function Details() {

    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyCUhgl52pUXIO5P9rQbKPGvlg2o2wdjKk4`)
        .then((response) => setVideos(response.data.items[0]))
        .catch((error) => console.log(error))
    },[])
    console.log(videos)

    const watchL = (videos)=> {
       
        console.log(videos)
        dispatch(watchLater(videos))


    }

    const link = "https://www.youtube.com/embed/"
    return (

    <div>
        
      {videos ? (
        <div>
         
          <iframe width="420" height="345" src={link+videos.id}></iframe>
     
          <p>{videos.snippet.title}</p>
          <p>{videos.snippet.publishedAt}</p>
          <p>{videos.snippet.channelId}</p>
          <p>{videos.snippet.description}</p>

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

      <button type="button" onClick={()=>{
          history.push("/watchLater")
          watchL(videos)
    }}>Watch later</button>
    </div>
  );
}

export default Details;