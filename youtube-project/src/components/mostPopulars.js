import { setPopular } from "../reducers/mostPopular/actions";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import OnePopular from "./onePopular";


function MostPopular(){
  const dispatch = useDispatch();

  const state = useSelector((state)=>{
    // console.log(state);
    return {
      mostPopular: state.mostPopularReducer.mostPopular,
    }
  })
    
    useEffect(() => {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyDkbuPNrn6rDX1xsHmj07xQqntviV1fSH0")
          .then((response) => {
            const action = setPopular(response.data.items);
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return(
          <>
          {console.log(state.mostPopular)}
          <div className="mostPopular">
            <OnePopular popular={state.mostPopular}/>
            </div>
          
          {/* {state.mostPopular} */}
          </>
      )
}

export default MostPopular