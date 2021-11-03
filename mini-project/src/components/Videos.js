import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setVideo } from "../reducers/videos/action";
import { useHistory } from "react-router-dom";
import {searching} from "../reducers/videos/action"


const Videos = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector((state) => {
    return {
      videos: state.videosReducer.videos,
    };
  });

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyB8Po948nZlW1HHlg_g4r-R10Oz4SmLMRU")
      .then((response) => {
        const action = setVideo(response.data.items);
        dispatch(action);
      }) 
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // first display 
  let results;
  if (state.videos !== undefined) {
    results = state.videos.map((element) => {
      return (<div className="video">
        <iframe width="350" height="245" src={'https://www.youtube.com/embed/'+element.id.videoId} ></iframe>
        <h2>{element.snippet.title}</h2>
        <p>{element.snippet.description}</p>
        <button onClick={() => {history.push(`/video/${element.id.videoId}`)}}> Details</button>
        </div>)
    })
  }

  // for search bar 
  let searchvideo = (e) => {
    let value = e.target.value;
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyB8Po948nZlW1HHlg_g4r-R10Oz4SmLMRU`)
    .then((response) => {
      const action = searching(response.data.items);
      dispatch(action);
    }) 
};

  return (<>
    <div className="search"><input type="text" placeholder="Search ..." onChange={searchvideo} id="search"/></div>         

    <div className="videoList">
      {results}
    </div>
    </>
  );
};

export default Videos;
