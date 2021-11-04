import { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setVideos } from '../videos/Action';
import { useParams } from "react-router"
import{ useHistory}from 'react-router'
import axios  from "axios";

const WatchLater = ({video})=>{


    const [watchLater,setwatchLater]=useState([]);
    const {id} =useParams();
    const history=useHistory();
    
    watchLater.puch({video})

    const dispatch=useDispatch();
const state =useSelector((state)=>{
    return{
        videos: state.videoReducer.videos,   
    }
})

    
return (
   

<div >
           <iframe width="420" height="345" src={link+video.id.videoId}>
           <p>{video.snippet.description}</p>        
</iframe><br/>
</div>

)


}
export default  WatchLater;

