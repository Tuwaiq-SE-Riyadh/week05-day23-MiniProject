//To do:
// 1- The home page should display the most popular videos from youtube api.

//1.1 import useEffect and axios
import { useEffect, useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setVideo } from "../reducers/video/action";
import Video from "./Video";

function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        video: state.video.video,
      };
    });
    const[videos, setVideos] = useState([]);
    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyCM1fcmPMlBSytN_fpgaRG9e9ChWWBlM9g`)
          .then((response) => {
            const action = setVideo(response.data.items);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const changeSerach=(e)=>{
        console.log("input> "+e.target.value);
        let query =e.target.value
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&key=AIzaSyCM1fcmPMlBSytN_fpgaRG9e9ChWWBlM9g`)
          .then((response) => {
            const action = setVideo(response.data.items);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return (
      <div className="Home">
          <div className="Search">
          <div className="Icon">
            <img width="25px" height="25px" src="https://img.icons8.com/color/2x/youtube-play.png"/>
            <p>YouTube</p>
          </div>
          <div className="divSearch">
            <input type="text" placeholder="Search" onChange={changeSerach}/>
            <button>
                <img width="11px" height="12px" src="https://img.icons8.com/windows/2x/search.png"/>
            </button>
            </div>
            </div>
          {state.video.map((e)=>{
            return <Video className="mostPopular" id={e.id.videoId} key={e.id.videoId}/>
          })}
      </div>
    );
}
  
export default Home;