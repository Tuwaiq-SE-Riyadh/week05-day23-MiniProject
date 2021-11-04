import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";

const VideoDetails = () => {
  const [youtube, setYoutube] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyB2TErBVnjJmaCZa5CjGH-PpkN3HptbV0k`
      )
      .then((response) => {
        console.log(response);
        setYoutube(response.data.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const url = "https://www.youtube.com/embed/";
  return (
    <div>
      {youtube ? (
        <div>
          <iframe width="420" height="345" src={url + id}></iframe>
          <p>{youtube.snippet.title}</p>
          <p>{youtube.snippet.channelTitle}</p>
          <p>{youtube.snippet.description}</p>
          <p>{youtube.snippet.publishedAt}</p>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            back
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoDetails;
