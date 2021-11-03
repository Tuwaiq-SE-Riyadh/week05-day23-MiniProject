import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";
import {useParams} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { setWatchLater } from "../reducers/videos/actions";


function VideoDetails(){

    const history = useHistory();
    const dispatch = useDispatch();


    const {id} = useParams()
    const [videoObject, setVideoObject] = useState()

    let API_KEY = "AIzaSyAYivC7LcSkUkzdmaGWoZs1dESsx42-htk"
    useEffect(()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`)
        .then((response)=>{
            setVideoObject(response.data.items[0])
        })
        .catch((err)=>console.log(err))
    },[])


    const addTowatchLater = ()=>{
        dispatch(setWatchLater(videoObject))
        history.replace("/Watch-Later-Videos")
    }


    
    return <div>
                <h1>{id}</h1>
                <hr/>
                        {videoObject ? (
                                <div>
                                    <h1>{videoObject.title}</h1>
                                    <iframe width="420" height="315"
                                            src={`https://www.youtube.com/embed/${id}`}>
                                    </iframe>   
                                    <p>{videoObject.publishedAt}</p>
                                    <p>{videoObject.channelTitle}</p>
                                    <button onClick={addTowatchLater}>watch Later</button>
                                    <hr/>
                                    <p>{videoObject.description}</p>
                                <button
                                    onClick={() => {
                                    history.goBack();
                                    }}
                                >
                                    Back
                                </button>
                                </div>
                                ) : ("")
                        }
            </div>

}

export default VideoDetails;