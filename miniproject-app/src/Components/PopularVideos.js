//todosss
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Video from "./Video";
import { setVideos } from "../reducers/Videos/actions";

const PopularVideos = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    
    return {
        PopularVideos: state.videosReducer.popularVideos,
  
    };
  });

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyABu41MMcrpypaRqWZQKQ1kw1AoaI9r0SI")
      .then((response) => {
        const action = setVideos(response.data.items);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(state.PopularVideos)
  return (
    <div className="videosGrid">
     
      {state.PopularVideos.map((element,key) => {
        return <Video PopularVideos={element} key={key} />;
      })}
    </div>
  );
};

export default PopularVideos;
