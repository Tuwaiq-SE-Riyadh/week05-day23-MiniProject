
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import VideoDetials from './VideoDetials'
import './Video.css'
import Search from './Srearch'
import WatchLater from "./WatchLater";
const Video=({video,id})=>{
//  const dispatch = useDispatch();
 const history=useHistory();
 const link = "https://www.youtube.com/embed/"
   // console.log(video.id.videoId);


    return (
        <>
       {/* <Search/> */}
        <div >
           <iframe width="420" height="345" src={link+video.id.videoId}>
           <p>{video.snippet.description}</p>        
</iframe><br/>
<button className="btn" onClick={()=>{
   console.log(video.id.videoId);

    {history.push(`/video/${id}`)}
// return  <VideoDetials />

}
}
    >Detials</button>


<button className="btn" onClick={()=>{
  <WatchLater video={video}/>

}
}
    >WatvhLater</button>
        </div>
        </>
    )
}

export default Video;
//'https://www.youtube.com/embed/'+

