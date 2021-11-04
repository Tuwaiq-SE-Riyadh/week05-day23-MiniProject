import { useEffect ,  useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Home from "./Home"
import { addvidieo } from "../reducers/youtube/actions"

const Youtubelist = () => {
  
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log(state);
    return {
      youtube: state.youtubeReducer.video,
   
    };
  });

  useEffect(() => {
    axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAFB15Gwwb26DjI0ElBavPXnNHaBXT9xUk")
      .then((response) => {
        console.log(response)
        const action = addvidieo(response.data.items);
        console.log(action)
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(state.youtube)
  return (
    <div className="container-fluid">
      <div className="row">
      {state.youtube.map((element) => {
        return <Home videos={element} key={element.id} />;
      })}
      </div>
    </div>
    
  );
};

export default Youtubelist;
