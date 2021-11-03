// import { useContext } from "react";
// import { UserContext } from "./App";

import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import { useState } from 'react';

function Home() {

// const userContext = useContext(UserContext)
// const [id, setId] = useState();
const history = useHistory();
   
  const state = useSelector((state) => {
      console.log(state)
    return {
      videos: state.videos.videos,
    };
  });

  const showDetails = (id) => {
    history.push("/details/"+id)
  }

console.log(state.videos) 
    return (
        <div>

      {state.videos.map((element, index) => {
          const link = "https://www.youtube.com/embed/"
         return (
          <>
          <iframe width="420" height="345" src={link+element.id.videoId}></iframe>
          <button type="button" onClick={()=>showDetails(element.id.videoId)}>Details</button>
          {/* <Details value={element.title}/> */}

          
          </>
        )
      })}

        </div>
      );
    
}

export default Home;