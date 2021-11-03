import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { setVideoList } from "../reducers/watchlater/action";
import { useDispatch } from "react-redux";


const VideoDetails = () => {
  const [vid, setVid] = useState();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyB8Po948nZlW1HHlg_g4r-R10Oz4SmLMRU`)
      .then((response) => {
        setVid(response.data.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addvideo = () => {
    const newVideo = {
      id: vid.id,
      video: vid,
    };
    const action = setVideoList(newVideo);
    dispatch(action);
    history.push("/Watchlater")

}

  return (
    <div className="details">
      {vid ? (<>
        <h3>{vid.snippet.title}</h3>
        <iframe width="350" height="245" src={'https://www.youtube.com/embed/'+vid.id} ></iframe>
        <h4 className="borderdesc">Description : </h4>
        <p>{vid.snippet.description}</p>
        <div className="channel-publishdate">
        <p>Channel : {vid.snippet.channelTitle}</p><p id="lefth">Published At : {vid.snippet.publishedAt}</p>
        </div>
        <div className="btn">
        <button onClick={() => {history.goBack()}}>Go Back</button>
        {/* new page */}
        <button onClick={addvideo}>Watch later</button></div>

        </>) : ("wait please ;)")}
    </div>
  );
};

export default VideoDetails;
