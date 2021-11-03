import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../reducers/watchlater/action";
import { useHistory } from "react-router";

const Watchlater = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector((state) => {
    return {
        listvideos: state.listvideosReducer.listvideos,   
    };
  });

  return (

    <div className="watch"> 
        {state.listvideos.length !== 0 ? (
        state.listvideos.map((element) => {
            return(<div> <p>{element.video.snippet.title}</p>
            <button onClick={() => {
                const action = deleteVideo(element.id);
                dispatch(action);}}>delete</button>
                 </div>);
        }) ) :("There is no Videos ;)")}



        <button id="back" onClick={() => {history.push("/")}}>Back</button>

    </div>
  );
};

export default Watchlater;
