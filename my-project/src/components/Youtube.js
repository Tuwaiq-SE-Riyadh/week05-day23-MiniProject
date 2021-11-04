import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import YoutubeItem from "./YoutubeItem";
import { setYoutube } from "../reducers/youtube/actions";

const Youtube = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log(state);
    return {
      youtube: state.youtubeReducer.youtube,
    };
  });
  console.log(state.youtube);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyB2TErBVnjJmaCZa5CjGH-PpkN3HptbV0k"
      )
      .then((response) => {
        console.log(response);
        const action = setYoutube(response.data.items);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex">
      {state.youtube.map((element, key) => {
        return <YoutubeItem youtubeItem={element} key={key} />;
      })}
    </div>
  );
};

export default Youtube;
