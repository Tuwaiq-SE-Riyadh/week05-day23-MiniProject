import { useHistory } from "react-router";

const YoutubeItem = ({ youtubeItem }) => {
  const history = useHistory();
  const url = "https://www.youtube.com/embed/";
  return (
    <div>
      <iframe
        width="400"
        height="300"
        src={url + youtubeItem.id.videoId}
      ></iframe>
      <br />

      <button
        onClick={() => {
          history.push(`/videoDetails/${youtubeItem.id.videoId}`);
        }}
      >
        {" "}
        Details
      </button>
      <button> Watch Later</button>
    </div>
  );
};

export default YoutubeItem;
