import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { setVideoList } from "../reducers/watchlater/action";
import { useDispatch } from "react-redux";



const VideoDetails = () => {
    const[vedioo,setVedioo]=useState();
    const {det} = useParams();
    const history = useHistory();
    const dispatch = useDispatch()


    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${det}&key=AIzaSyB8Po948nZlW1HHlg_g4r-R10Oz4SmLMRU`)
          .then((response) => {
            setVid(response.data.items[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      
  const addvedio = () => {
    const newvedio = {
      id: vv.id,
      video: vid,
    };
    const action = setvedioList(newvedio);
    dispatch(action);
    history.push("/Watchlater")

}


return (
    <div className="details">
      {vid ? (<>
        <h3>{title}</h3>
        <iframe width="400" height="250" src={'https://www.youtube.com/embed/'+vv.id} ></iframe>
        <div className="btn">
        <button onClick={() => {history.goBack()}}>Go Back</button>
        <button onClick={addvedio}>Watch later</button></div>
        </>) : ("wait please ;)")}
    </div>
  );
};

export default VideoDetails;

