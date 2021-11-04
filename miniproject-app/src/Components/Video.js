import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";


const Video = ({ PopularVideos }) =>{
// const dispatch=useDispatch();
const history=useHistory();
const url="https://www.youtube.com/embed/";
  return (
    <div>
     <iframe width="420" height="345"
      src={url+ PopularVideos.id.videoId} 
      title="YouTube video player">
       </iframe>
       <br></br>
     <Button variant="outline-danger" onClick={() => {history.push(`/videoDetails/${PopularVideos.id.videoId}`)}}>Deatails</Button>
     {/* <Button variant="outline-danger" onClick={() => {dispatch('AddWatch${PopularVideos.id.videoId}')}}>Add to watch later</Button> */}
    </div>
  );
}
export default Video;