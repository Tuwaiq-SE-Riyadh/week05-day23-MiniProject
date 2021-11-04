import { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setVideos } from '../videos/Action';
import { useParams } from "react-router"
import{ useHistory}from 'react-router'
import axios  from "axios";

const VideoDetials = ()=>{


    const [video,setVideo]=useState();
    const {videoId,id} =useParams();
    const history=useHistory();
    

    const dispatch=useDispatch();
const state =useSelector((state)=>{
    return{
        videos: state.videoReducer.videos,   
    }
})

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDQMmZy80prLXQwGQumKmxRELmsfdzqBa8`)
          .then((response) => {
           setVideo(response.data.items);
         console.log(response.data.items);
         console.log(video);
            // dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    

    
return (
   
<div>

  {video? (
      <div>
<img src={video[0].snippet.thumbnails.high.url} />
<p>{video[0].id}</p>
 <p>{video[0].categoryId}</p>
 <p>{video[0].snippet.title}</p>
    <p>description: {video[0].snippet.description}</p>
 
    
    </div>)
     :<p>No video</p>
  }
</div>

)


}
export default  VideoDetials;

