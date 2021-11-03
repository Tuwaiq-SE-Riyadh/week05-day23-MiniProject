
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../reducers/user/actions";
import axios from "axios"


function Search (){
    const dispatch = useDispatch();
    const[inputSearch,setinputSearch]=useState("")
  


    function inputSearch1(e){  
        setinputSearch(e.target.value)
        // setInputSearch(e.target.value)
       
      }

   const searchid= () => {
       console.log(inputSearch);
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputSearch}&key=AIzaSyCu1VqGje_XhZt1fMDNaiJltUSMcpFajIc`)
    .then((response) => {       
    //   console.log(response.data);
      const action = setVideos(response.data.items);
      dispatch(action);
     
    })
    .catch((err) => {
      console.log(err);
    });
   }
   
    return(
        <div>
<input type="text" value={inputSearch} onChange={inputSearch1}/> <button onClick={searchid}> search </button>
        </div>
    )
}
export default Search;