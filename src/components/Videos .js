import { useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/user/actions";
import ListVideos from './ListVideos'

function Videos(){
    const dispatch = useDispatch();

    const state = useSelector((state) => {
      console.log(state);
      return {
        videos: state.videosReducer.videos,
      };
    });
    useEffect(() => {
        axios
          .get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyCu1VqGje_XhZt1fMDNaiJltUSMcpFajIc')
          .then((response) => {       
            console.log(response.data.items);
            // console.log(response.data.items[0].snippet.title);
            const action = setVideos(response.data.items);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []); 

    return(
        <div>
        {state.videos.map((element,index) => {
        return (
            <div key={index} >
              <ListVideos Videos={element} />  
           {/* <ListVideos videoId={element.id.videoId} title={element.snippet.title} describe={element.snippet.describe} key={element.id} /> */}

                {/* <p>{element.id.videoId} </p>
                <p>{element.snippet.title} </p>
                <p>{element.snippet.describe} </p> */}
            </div>
        ) 
      })}
        </div>
    )
}
export default Videos;
{/* <ListVideos Videos={element} key={element.id} />*/}