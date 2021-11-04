import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setVideo } from "../reducers/video/action";
import { setList } from "../reducers/watchLater/action";

function VideoDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        video: state.video.video,
      };
    });

    const { id } = useParams();
    let srcVid =`https://www.youtube.com/embed/${state.video[0].id}`

    // get element by id
    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyCM1fcmPMlBSytN_fpgaRG9e9ChWWBlM9g`)
          .then((response) => {
              console.log("details");
            console.log(response.data.items);
            const action = setVideo(response.data.items);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      const watchLaterClick = ()=>{
        // state.video[0]
        const action = setList(state.video[0]);
        dispatch(action);
        console.log("state.video");
        console.log(action);
        history.push("/watchlater")
      }
    return (
      <div className="videoList">
        {/* display video details */}
        <iframe width="420" height="315"
                src={srcVid}>
        </iframe>
        <button onClick={watchLaterClick}>Watch later</button>
        <h1 className="HeaderDesign">Title</h1>
        <p>{state.video[0].snippet.title}</p>
        <h1 className="HeaderDesign">published At</h1>
        <p>{state.video[0].snippet.publishedAt}</p>
        <h1 className="HeaderDesign">channel Title</h1>
        <p>{state.video[0].snippet.channelTitle}</p>
        <h1 className="HeaderDesign">description</h1>
        <p>{state.video[0].snippet.description}</p>
      </div>
    );
}

export default VideoDetails;