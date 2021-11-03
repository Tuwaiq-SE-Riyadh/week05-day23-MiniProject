import React, { createContext, useEffect, useState } from 'react';
import { searchVideos } from './videos';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

function Search() {

    const [videos, setVideos] = useState();
    const [searchVal, setSearch] = useState();

    const dispatch = useDispatch();

    useEffect(() => {

        axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videos}&key=AIzaSyACj28jAni3rr2G2iXY_hotZ94NH6NNoY0`)
        .then((response) => dispatch(searchVideos(response.data.items)))
        .catch((error) => console.log(error))
      },[searchVal])

      const searchVid = (e) => { 

        let vid = e.target.value;
        setVideos(vid)
      }

      const searching = () => {

        setSearch(videos)

      }
      const state = useSelector((state) => {
        console.log(state)
      return {
        videos: state.videos.videos,
      };
    });
  console.log(state.videos) 

      return (

        <>
        <input value={videos}  onChange={searchVid}/>
        <button type="button" onClick={searching}>Search</button>

        {state.videos.map((element, index) => {
          const link = "https://www.youtube.com/embed/"
         return (
          <>
          <iframe width="420" height="345" src={link+element.id.videoId}></iframe>
          </>
        )
      })}
        </>
      )
}

export default Search;