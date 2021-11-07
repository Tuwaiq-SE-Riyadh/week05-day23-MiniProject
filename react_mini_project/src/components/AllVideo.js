import { useState, useEffect } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import VideoDetails from "./VideoDetails"
function AllVideo ({allVideos,setAllVideos}){
    const [videouDetalis, setVideouDetalis] = useState([]);
    
    console.log(allVideos)
    console.log(videouDetalis);


    const videoDetalis = () => {
    
    
        
        axios
          .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videouDetalis}&key=AIzaSyDoqqSAC4vyVNvmzcRT7xtEjgcT3D1T3rM`)
          .then((response) => setVideouDetalis(response.data)) //response.data.items[0].snippet.thumbnails.high.url
          .catch((error) => console.log(error));
        
          
    
    };
    return( 

        <div>
            
    {allVideos.map((element, index) => {
                  
                 
                  return  <div className="AllVideoDiv">{setVideouDetalis(element.id.videoId)}
                        <div onClick={videoDetalis}>
                    <iframe  width="720" height="345" src={`https://www.youtube.com/embed/${element.id.videoId}`}></iframe>
                <h3 className="cardName">{element.snippet.title}</h3>
                </div>
           </div>
       
            
       })}

            
       
        </div>
    )
}
export default AllVideo;