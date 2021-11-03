import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './video';

function Home() {
    const [videos, setVideos] = useState([]);


  useEffect(() => {
    axios.all([
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyB3C97imkPX4VIEMVhBXaRCtHa4dlmr7aQ')
    ])
    .then(r => {
        setVideos(r[0].data.items);
      });
    },[]);


  return (

<div className="div_videos">


{
  videos === undefined ? '': 
    videos.map(function(e, index){
   return (<div  key={index}><Video item={e} /></div>)})

}



</div>

  );
}

export default Home;
