import { useSelector } from "react-redux";
import { useParams } from "react-router";
function VideosDetails() {
  const { id } = useParams();
  //   const [vid, setVid] = useState([]);

  const state = useSelector((state) => {
    console.log(state);
    return {
      videos: state.videosReducer.videos,
    };
  });
  const a = state.videos.filter((element) => {
    console.log(element.id.videoId, id);
    if (element.id.videoId == id) {
      return element;
    }
  });
  console.log(a);

  return (
    <>
      <div>
        <img src={a[0].snippet.thumbnails.high.url} />
        <p>Title: {a[0].snippet.title}</p>
        <p>description: {a[0].snippet.description}</p>
        <p>channel: {a[0].snippet.channelTitle}</p>
        <p>publish Time: {a[0].snippet.publishTime}</p>
        <div className="card-btns"></div>
      </div>
    </>
  );
}
export default VideosDetails;
