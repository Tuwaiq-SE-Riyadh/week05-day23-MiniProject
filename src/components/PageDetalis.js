import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch} from "react-redux";
import  {WatchLater} from '../reducers/user/actions'

import axios from "axios";

function PageDetalis(){
    const [videos, setvideos] = useState([]);
    const [WatchLaterDetis, setWatchLaterDetis] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
       
        axios
        // https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBs8YDqDg5CX_C7sisUFYR6xJ5O_vpsBZg
          .get(`  https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyCu1VqGje_XhZt1fMDNaiJltUSMcpFajIc`)
          .then((response) => {
            
              setvideos(response.data.items[0].snippet);
              console.log(response.data.items[0].snippet);
          })
          .catch((err) => {
            console.log(err);
            console.log(id );
          });
      }, []);

const add=()=>{
    // const arr = []
    // arr.push(videos)
    // setWatchLaterDetis(arr)
    // console.log(arr);
    const action = WatchLater(videos);
  dispatch(action);
  history.push(`/WatchLater`)

}

    return(
        <div>

 
          {videos ? (
        <div>
          <p>{id}</p>
          <iframe width="420" height="315"
            src='https://www.youtube.com/embed/${id}'>
            </iframe>
          <p>{videos.title}</p>
          <p>{videos.description + ""}</p>
          <button onClick={add}>add </button>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}

        </div>
    )
}
export default PageDetalis;