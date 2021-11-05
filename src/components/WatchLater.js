import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import  {deleteWatchLater} from '../reducers/user/actions'
import { Button } from 'react-bootstrap';
import {  useHistory } from "react-router";
function WatchLater(){
  const dispatch = useDispatch();
  const history = useHistory();
    const state = useSelector((state) => {
        console.log(state);
        return {
          videos:state.videosReducer.videos,
          watchLater: state.videosReducer.watchLater
        };
        
      });

    return(
        <div>
         
  {state.watchLater.map((e)=>{
    return(
      <div>
  
  <iframe title="viedos" width="420" height="315"
src='https://www.youtube.com/embed/${videoId}'> 
</iframe>
<p>{e.title} </p>
<p>{e.description} </p>
<Button  variant="outline-danger" onClick={() => { const action = deleteWatchLater(e); dispatch(action); }} > Delete </Button>
 <Button    variant="outline-danger" onClick={() => {history.goBack(); }}>GoBack</Button>
      </div>
    )
   
  })}
        </div>
    )
}
export default WatchLater;