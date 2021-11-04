import { useState, useEffect, createContext } from "react";
import { useDispatch ,useSelector} from "react-redux";
import axios from 'axios'
import { searchvideo } from "../reducers/youtube/actions";

const Search = () => {

    const [searchText, setSearchText] = useState("")

    const [videos, setVideos] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videos}&key=AIzaSyAFB15Gwwb26DjI0ElBavPXnNHaBXT9xUk`)
            .then((response) => {
                console.log(response)
                const action = searchvideo(response.data.items);
                console.log(action)
                dispatch(action);
                console.log()
            })
            .catch((err) => {
                console.log(err);
            });
    }, [searchText]);
    const changesearchvid = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }
    const searching = () => {
        setVideos(searchText)
    }
    const state = useSelector((state) => {
        console.log(state);
        return {
            videos: state.youtubeReducer.video,

        };
    });

    console.log(state.youtubeReducer)


    return (
        <>
            <div className="nav">
                <input type="text"  onChange={changesearchvid} />
                <button type="button" onClick={searching}></button>

            </div>
            <div className="videos">
                {
                    state.videos.map(vid => {
                        <div className="item"></div>
                        const ul="https://www.youtube.com/embed/"
                        return (
                          <div> 
                      <iframe width="420" height="315"
                      src={ul+vid.id.videoId}>
                          
                      </iframe> 
                      </div>

                    )
                })
                }
            </div>
        
        </>
        
    );


}

export default Search