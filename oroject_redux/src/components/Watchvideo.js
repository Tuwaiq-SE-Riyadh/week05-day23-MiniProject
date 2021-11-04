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
            // video:state.youtubeReducer.video,
            watch: state.youtubeReducer.video,


        };
    });
    

    
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
                        <p>{element.title}</p>
                        <p>{element.publishedAt}</p>
                        <p>{element.channelId}</p>
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




