import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletewatchlater, watchlater } from "../reducers/youtube/actions"
import axios from "axios";


const Watchvideo = ({ video }) => {
    // const [ watchvideo, setWachvideo] = useState([])
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        console.log(state);
        return {
            video:state.youtubeReducer.video,
            watch: state.youtubeReducer.video,


        };
    });
    // useEffect(() => {
    //     axios
    //         .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAFB15Gwwb26DjI0ElBavPXnNHaBXT9xUk")
    //         .then((response) => {
    //             console.log(response)
    //             const action = watchlater(response.data.items);
    //             console.log(action)
    //             dispatch(action);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    const li = "https://www.youtube.com/embed/"

    return(
        <div>
       {console.log(state.watch)}

        {state.watch.map((element, index) => {
            const li = "https://www.youtube.com/embed/"
                return (
                    <div>
    
                        <iframe width="420" height="315"
                            src={li + element.id.videoId}>
                        </iframe>
                        <p>{element.snippet.title}</p>
                        <p>{element.snippet.publishedAt}</p>
                        <p>{element.snippet.channelId}</p>
                        <p>{element.description}</p>
    
                        <button className="btn btn-secondary me-2" onClick={() => {
                            const action = deletewatchlater(element)
                            dispatch(action)
                        }}> delete</button>
                    </div>
    
    
    
    
                )
            })}
        </div>
    )

    








}
export default Watchvideo;




