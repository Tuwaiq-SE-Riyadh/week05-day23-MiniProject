import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import { setVideos } from "../reducers/Videos/action";
import Video from "./Video";
import { UserContext } from "../App";

function Videos() {
  const theme = useContext(UserContext);
  // console.log(UserContext1);
  // const theme = UserContext1.state.theme
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    return {
      videos: state.videosReducer.videos,
    };
  });
  console.log(state.videos);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyClMpV6JB9Z39I8lvK47MVA_mxFEL3mAeg"
      )
      .then((response) => {
        // const test = response.data.item
        const action = setVideos(response.data.items);
        console.log(response.data.items);

        dispatch(action);
      });
  }, []);

  return (
    <div className={`card-container ${theme}`}>
      {state.videos.map((element) => {
        return <Video video={element} />;
      })}
    </div>
  );
}
export default Videos;
