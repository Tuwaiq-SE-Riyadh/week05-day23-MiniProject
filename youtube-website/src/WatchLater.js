import { useSelector } from "react-redux";
import {deleteWatchLater} from './videos';
import {useDispatch} from "react-redux";

function WatchLater() {

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log(state)
      return {
        videos: state.videos.videos,
        watchLater: state.videos.watchLater
      };
    });

     return (
        <div>

      {state.watchLater.map((element, index) => {
          const link = "https://www.youtube.com/embed/"
         return (
          <>
          <iframe width="420" height="345" src={link+element.videoId}></iframe> 

          <p>{element.title}</p>  
          <p>{element.description}</p>  

          <button
              onClick = {() => {
                  const action = deleteWatchLater(element);
                  dispatch(action);
              }} 
              >
                  Delete
              </button>
          </>
        )
      })}

        </div>
      );


}

export default WatchLater;