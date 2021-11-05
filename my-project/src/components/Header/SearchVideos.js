import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setYoutube } from "../../reducers/youtube/actions";

function SearchVideos() {
  const [search, setSearch] = useState();
  const [value, setvalue] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyCaDm7IOsc6AZn8UV_-EBeiyuUyfjMg7AU`
      )
      .then((response) => {
        console.log(response);
        const action = setYoutube(response.data.items);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

  return (
    <div className="App">
      <input
        style={{ width: "60%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setvalue(search)}>Search</button>
    </div>
  );
}

export default SearchVideos;
