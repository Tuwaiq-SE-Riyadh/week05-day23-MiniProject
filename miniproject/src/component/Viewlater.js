import './style.css';

import { useSelector} from "react-redux";
import Listviewlater from './Listviewlater'


function Viewlater() {

  const state = useSelector((state) => {
    return {
        viewLater: state.videosReducer.viewLater
    };
  });

  console.log(state.viewLater)

  return (
    
    <>
         <div class="topnav">
    <a >Home</a>
    <a >Search</a>
    </div>
    <div className="viewlater">
    {state.viewLater.map((element, index) => {
      return<Listviewlater elemnt={element}  index={index} />
      })}
      </div>
      </>
  );
}

export default Viewlater;