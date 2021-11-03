import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import  {deleteWatchLater} from '../reducers/user/actions'
function WatchLater(){
  const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log(state);
        return {
          videos:state.videosReducer.videos,
          watchLater: state.videosReducer.watchLater
        };
        
      });

    return(
        <div>
         
  {state.watchLater.map((e)=>{
    return(
      <div>
  
  <iframe width="420" height="315"
src='https://www.youtube.com/embed/${videoId}'>
</iframe>
<p>{e.title} </p>
<p>{e.description} </p>
<button
        onClick={() => {
          const action = deleteWatchLater(e);
          dispatch(action);
        }}
      >
        Delete
      </button>
      </div>
    )
   
  })}
        </div>
    )
}
export default WatchLater;