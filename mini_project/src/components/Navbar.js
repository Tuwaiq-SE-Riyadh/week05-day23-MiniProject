import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/videos/actions";
import axios from "axios";


import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import "./Navbar.css"



function Navbar(){
    
    const dispatch = useDispatch();


    let inputText =""

    const AapplySearchBar = ()=>{
            let API_KEY = "AIzaSyD4iZQm8xoQ3MgyuKY-W4drJOMcNxEMJkI"
            
                axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputText}&key=${API_KEY}`)
                .then((response)=>{
                // console.log(response)
                dispatch(setVideos(response.data.items));
                })
                .catch((err)=>console.log(err))
            
    }

    return <div className="navbarDiv">
            <MenuIcon className="MUI_icon" color="info" fontSize="large" />
            <div>
                <TextField onChange={(e)=>{inputText = e.target.value}} size="small" id="outlined-basic" label="Search" variant="outlined" />
                <button onClick={AapplySearchBar} ><SearchIcon/></button>
            </div>
            <div> icons</div>
        </div>
        
}


export default Navbar;


