import {  useParams } from "react-router-dom";
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

function Details() {

    const [video, setVideo] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyACj28jAni3rr2G2iXY_hotZ94NH6NNoY0`)
        .then((response) => setVideo(response.data.items[0]))
        .catch((error) => console.log(error))
    })

    return (
    <div>
       <p>{video.snippet.title}</p>
       <p>{video.snippet.publishedAt}</p>
       <p>{video.snippet.channelId}</p>
       <p>{video.snippet.description}</p>

       <button onClick={() => {history.goBack();}}>Go back</button>

       <button type="button">Watch later</button>
      
    </div>

    )
}

export default Details;