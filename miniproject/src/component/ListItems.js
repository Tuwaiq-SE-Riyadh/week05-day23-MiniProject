import './style.css';
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { addViewLater } from "../reducers/video/actions";


function ListItems({elemnt,index}) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
  <div className="column">
    <div className="card">
    <iframe width="400" height="200" src={"https://www.youtube.com/embed/"+elemnt.id.videoId}></iframe>
    <div className="title">{elemnt.snippet.title}</div>
    <div><button onClick={() => {history.push(`/video/${elemnt.id.videoId}`)}}>DETILE</button>
    <button
            onClick={() => {
              const action = addViewLater(elemnt.snippet.title);
              dispatch(action);
              history.push(`/viewlater`)
            }}>VIEW LATER</button></div>
  </div>
  </div>
  );
}

export default ListItems;