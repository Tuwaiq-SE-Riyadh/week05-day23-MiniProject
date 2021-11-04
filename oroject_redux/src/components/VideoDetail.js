import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router"
import { useDispatch } from "react-redux";
import { watchlater } from "../reducers/youtube/actions";
import axios from "axios";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const ul=`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAFB15Gwwb26DjI0ElBavPXnNHaBXT9xUk`
  useEffect(() => {
    axios
   
      .get(ul)
      .then((response) => {
        setVideo(response.data.items[0]);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const wlater=(video)=>{
    dispatch(watchlater(video))
    history.push("/Watchvideo")
  }
  
 const li="https://www.youtube.com/embed/"
  return (
    <div className="container-fluid">
      {video ? (
        <div className="text-center mb-3 p-3">
        
          <iframe width="420" height="315"
          src={li+video.id.videoId}>
           </iframe> 
          <p>{video.snippet.title}</p>
          <p>{video.snippet.publishedAt}</p>
          <p>{video.snippet.channelId}</p>
          <p>{video.description}</p>

          <button className="btn btn-secondary me-3" onClick={()=> {wlater(video)}}> wacthlater</button>
          <button className="btn btn-info" onClick={() => {history.goBack();  }} >
           Go Back
            </button> 
        </div>
        ) : (""
       
      )}

      
    </div>
  );
};

export default VideoDetails;
