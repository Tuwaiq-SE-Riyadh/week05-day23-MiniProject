import { useDispatch } from "react-redux";
import './style.css';
import { deletViewLater } from "../reducers/video/actions";

function Listviewlater({elemnt,index}) {
    const dispatch = useDispatch();


    return (
        <>

    <div>{elemnt}</div>
    <div><button onClick={() => {
          const action = deletViewLater(elemnt);
          dispatch(action);
        }}>delete</button></div>
    </>
    );
  }
  
  export default Listviewlater;