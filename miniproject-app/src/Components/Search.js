import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setVideos} from "../reducers/Videos/actions"
import { Button} from "react-bootstrap";
function Search() {
const [search,setSearch]=useState();
const [value,setValue]=useState();
const dispatch=useDispatch();
 
useEffect(()=>{
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&key=AIzaSyCX6PIP569HXRG_bWuBhBbGEyU6e2a5uFU`)
    .then((respones)=>{
console.log(respones);
const action=setVideos(respones.data.items)
dispatch(action)
    })
},[value])
    return(
        <div>
        <div className="form-controls">
        <label>Search</label>
        <input id="video-search"
        type="text"
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Enter Search Keyword"/>
        <Button variant="outline-danger" onClick={()=>setValue(search)}>Search</Button>
        </div>
        </div>
    )
}
export default Search;