import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { Button } from "react-bootstrap";
const VideoDetails = () => {
  const [video, setVideo] = useState();
  const { id } = useParams();
  const history = useHistory();
   
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyABu41MMcrpypaRqWZQKQ1kw1AoaI9r0SI`)
      .then((response) => {
          console.log(response)
        setVideo(response.data.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const url="https://www.youtube.com/embed/";
  return (
    <div>
      {video ? (
        <div className="stayle"> 
            <div className="details">
            <iframe width="800" height="400"
            src={url+id} 
            title="YouTube video player">
       </iframe></div>
          <h2>{video.snippet.title}</h2>
          <p id="channelTitle">{video.snippet.channelTitle}</p>
          <p>{video.snippet.description}</p>
         <p>{video.snippet.publishedAt}</p>
          
          
          <Button
          variant="outline-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </Button>
        </div>
      ) : (
        ""
      )}

     
    </div>
  );
};

export default VideoDetails;
