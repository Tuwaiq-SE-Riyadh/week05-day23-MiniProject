import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../reducers/videos/actions"


function WatchLaterVideos(){

    const dispatch = useDispatch();
    const state = useSelector((state) =>{
        return{
            VideosList:state.videosReducer.watchLater,
        }
        });
        
        let videoId =""
        const deleteVideoButton = (e)=>{
            videoId = e.target.id
            console.log(videoId)
            dispatch(deleteVideo(videoId))
            

        }

        const showVideosList = ()=>{
            console.log("--$$$$--")
            return state.VideosList.map((element, index) => {
                return <div>
                            <h1>{element.snippet.title}</h1>
                            <button id={element.id} onClick={deleteVideoButton}>Delete</button>
                            <hr/>
                    </div>
            })
        }

    return <div>
                <h1>WatchLaterVideos</h1>
                {showVideosList()}
                {console.log("--VideosList--")}
                {console.log(state.VideosList)}
                {console.log("--VideosList--")}
            </div> 
}

export default WatchLaterVideos;