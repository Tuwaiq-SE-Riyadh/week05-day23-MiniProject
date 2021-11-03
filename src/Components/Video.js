import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import { useDispatch } from "react-redux";
import { addwatchLater } from "../reducers/watchlater/action";
function Video({ video }) {
  const dispatch = useDispatch();

  const theme = useContext(UserContext);
  const history = useHistory();
  // console.log(video);
  return (
    <>
      <div className={`card ${theme}`}>
        <p className="title">Title: {video.snippet.title}</p>
        <img src={video.snippet.thumbnails.high.url} />
        <p className="title">Title: {video.snippet.title}</p>
        <p className="title">channel {video.snippet.channelTitle}</p>
        <div className="card-btns">
          <button
            onClick={() => {
              const action = addwatchLater(video);
              console.log(video);
              dispatch(action);
            }}
          >
           
            watch later
          </button>
          <button
            onClick={() => {
              history.push("/Videos/watchlater");
            }}
          >
           
           Go  watch later
          </button>
          <button
            onClick={() => {
              history.push(`/Videos/videodetails/${video.id.videoId}`);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}
export default Video;
