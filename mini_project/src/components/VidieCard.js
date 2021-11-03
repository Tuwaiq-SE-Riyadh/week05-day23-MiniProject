import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/videos/actions"
import "./VidieCard.css"

function VidieCard()
{
    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector((state) =>{
    return{
        VideosList:state.videosReducer.videos,
    }
    });

    const showDetails = (e)=>{
        console.log(e.target.id)
        history.push(`/Video-Details/${e.target.id}`)          
    }

    
    const showVideos = ()=>{
        return state.VideosList.map((element, index)=>{
                return <div  className="grid-item">
                                <img width="100%" src={element.snippet.thumbnails.medium["url"]} />
                                <p>{element.snippet["title"]}</p>
                                <button id={element.id["videoId"]} onClick={showDetails}>Show Details</button>
                        </div>
        })
    }



    return <div className="grid-container">
            {console.log(state.VideosList)}
            {showVideos()}
            </div>
}

export default VidieCard;