import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Video from "./Video";
import { deleteVideo } from "../reducers/watchLater/action";

function WatchLater() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            watchLater: state.watchLater.watchLater,
        };
    });
    console.log("state. watchlater > in watchlater page");
    console.log(state.watchLater[0].id);
    // let srcVid =`https://www.youtube.com/embed/${state.watchLater.id.videoId}`
    console.log(state.watchLater.length);
    const deleteClick=()=>{
        const action = deleteVideo(state.watchLater.id);
        dispatch(action);
    }
    // console.log("id test"+state.watchLater.id.videoId);
    return (
      <div className="watch">
          <h1 className="HeaderDesign">Watch Later</h1>
        {state.watchLater.map((e)=>{
            let srcVid =`https://www.youtube.com/embed/${e.id}`
            return <div className="watchLater">
                    <iframe width="420" height="315" src={srcVid}></iframe> 
                    <button onClick={deleteClick}>Delete </button>
                   </div>
          })}
        
      </div>
    );
}
  
export default WatchLater;