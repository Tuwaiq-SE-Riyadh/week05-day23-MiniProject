import "../App.css";
import { useSelector } from "react-redux";
import Video_Watch from "./Video_Watch";
import { useDispatch } from "react-redux";
import {deleteItem} from "../reducers/watch_later/watch_later"





function Watch() {
  
  const state = useSelector((state) => {
    return { list : state.Watches};  });
    const dis = useDispatch();



  return (
  <div className="d0">
  <h2>Watched later videos</h2>
{

  state.list.watchesList === undefined || state.list.watchesList.length === 0 ? <h2>List is empty !</h2>: 
  state.list.watchesList.map(function(e, index){
      return (<div  key={index} className="w"><Video_Watch item={e} />
      <button id="button2" type="button" className="btn btn-secondary" onClick={()=>{
  dis(deleteItem(e)); 
      }

} >Delete</button></div>)})

}

    </div>
  );
}

export default Watch;
