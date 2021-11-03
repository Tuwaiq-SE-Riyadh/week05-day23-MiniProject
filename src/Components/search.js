import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { useState } from "react";
import Video from "./Video";

const Search = () => {
  const history = useHistory();
  const { searchword } = useParams();
  const [vid, setVid] = useState([]);
  //   console.log(searchword);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchword}&key=AIzaSyClMpV6JB9Z39I8lvK47MVA_mxFEL3mAeg`
      )
      .then((response) => {
        setVid(response.data.items);
        console.log(vid);
        // const test = response.data.item
        console.log(response.data.items);
      });
  }, []);

  return (
    <>
      <div className={`card-container `}>
        {vid.map((element) => {
          return <Video video={element} />;
        })}
      </div>
    </>
  );
};
export default Search;
