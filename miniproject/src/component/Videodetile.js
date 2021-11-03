import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import './style.css';
const Videodetiles = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyD_o7IZhmMnPWrzOAsboD27FsNSg7U9E4o`)
      .then((response) => {
        setVideo(response.data.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  console.log("i am in video det out")
    console.log(video)


  return (
    <div className="body">
       {video ? (
    <div className="details">
      <iframe width="500" height="300" src={"https://www.youtube.com/embed/"+video.id}></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.publishedAt}</div>
      <div>{video.snippet.channelTitle}</div>
      <div>{video.snippet.localized.description}</div>
    </div>
     ) : (
      ""
    )}


    </div>
   
  );
};
export default Videodetiles;