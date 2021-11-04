
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {  useDispatch ,useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import {setvedio} from "./action"



function Search() {

const[vedioo,setVedioo]=useState();
const[searchh,setsearch]=useState("");


  const dispatch = useDispatch();
  
   useEffect(() =>{
  
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchh}&key=AIzaSyBPnvJ1v5j1tNzBZJ5Kz9yhmCViaAKMzX8`)
      .then((response) => {
        dispatch(setvedio(response.data.items))
        console.log(response.data.items)
       })
      .catch((error) => console.log(error));
  },[searchh]);


 const searchvd =(e) => {
let vd=e.target.value;
setVedioo(vd) 
 }

 const getSearch =() => {
    setsearch(vedioo)
 }
 
const state = useSelector((state ) =>{
console.log(state)
return {
    vedios:state.vedioReducer.vedio
};});
console.log(state.vedios)

  return ( 
    <>
    <input value={vedioo}  onChange={searchvd}/>
    <button type ="button" onClick={getSearch}>Search</button>

    {state.vedios.map((element) => {
           const link = "https://www.youtube.com/embed/"
        return (<iframe width="420" height="315"
        src={link+element.id.videoId}>
        </iframe>
        ) })}    
</>
  )
 }

export default Search;