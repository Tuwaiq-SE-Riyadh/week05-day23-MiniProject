import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import Video from './Video';
import { setVideos } from '../videos/Action';
import { useState } from "react";
import './Video.css';


const Search= ()=>{
const dispatch=useDispatch();
const history = useHistory();
// const { inputValue } = useParams();

const state =useSelector((state)=>{
    return{
        videos: state.videoReducer.videos,   
    }
})

let inputVal
 const [inputValue,setValue]=useState()
 

    const onChange=(e)=>{
     inputVal=e.target.value
     console.log(inputVal);
   }

   const onClick =(e)=>{
    // {history.push(`/video/${inputValue}`)}
     setValue(inputVal)
    console.log(inputValue);
   }

   useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputValue}&key=AIzaSyDQMmZy80prLXQwGQumKmxRELmsfdzqBa8`)
      .then((response) => {
        const action = setVideos(response.data.items);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputValue]);
return(
    <>
    <div>
    <i className="fa fa-youtube-play" font-size="48px" color="red">Youtube</i>
    <input className="input1" type="text" onChange={onChange}  placeholder="Search.."/> 
    <button className="searchBtn" onClick={onClick}> Search</button>
    </div>

    <div className="grid"> 
    {state.videos.map((element,index)=>{
          if(element.snippet.title.toLowerCase().includes(inputValue)&&(inputValue))
             return   <Video video={element}/>}
         
         )
       
         }
     </div>
    </>
)
}
export default Search;


// return(
    //     <>   
          
    // <input className="input1" type="text" onChange={onChange}  placeholder="Search.."/>
  
    //    </> 
    // )