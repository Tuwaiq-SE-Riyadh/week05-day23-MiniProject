import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setVideoLater } from "../reducers/watchLater/action"

function WatchVideo(){
    const state = useSelector((state)=>{
        return {
          video: state.Video.video,
        }
      })
    const dispatch = useDispatch()
      function AddToWatchLater(){
          const action = setVideoLater(state.video)
          dispatch(action)
      }
    console.log(state.video);
    return(
        <>
        <div className="videoDiv">
        <iframe width="600" height="315"
            src={`https://www.youtube.com/embed/${state.video.id.videoId}`} >
        </iframe>
        <p>Channel Title: {state.video.snippet.channelTitle}</p>
        <p>Title: {state.video.snippet.title}</p>
        <p> Description: {state.video.snippet.description}</p>
        <p>Published At: {state.video.snippet.publishedAt}</p>
       <Link to="/watchLater"> <input type="button" value="Add To Watch Later" onClick={AddToWatchLater} /></Link>
        </div>
        </>
    )
}

export default WatchVideo