import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch} from "react-redux";
import  {WatchLater} from '../reducers/user/actions'
import { Button  } from 'react-bootstrap';
import axios from "axios";

function PageDetalis(){
    const [videos, setvideos] = useState([]);
    const [WatchLaterDetis, setWatchLaterDetis] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
       
        axios
      
          .get(`  https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBfh1M8w3UXnjlU_tOZ4IyKHsopwKR3LZA`)
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
  

}

    return(
        <div>

 
          {videos ? (
        <div>
        
          <iframe width="420" height="315"
            src='https://www.youtube.com/embed/${id}'>
            </iframe>
           <div className="divTitle"> 
          <p>{videos.title}</p>
          <Button  className="boutton-add"   variant="outline-danger" onClick={add}>Add to Watch</Button>
          {/* <button onClick={add}>add </button> */}
          </div> 
          <p>{videos.description + ""}</p>
          <Button    variant="outline-danger" onClick={() => {history.goBack(); }}>GoBack</Button>
          {/* <button
            onClick={() => {history.goBack(); }} >
            Back
          </button> */}
        </div>
      ) : (
        ""
      )}

        </div>
    )
}
export default PageDetalis;