import { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './video';

function Search(props) {

    const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${props.match.params.id}&key=AIzaSyB3C97imkPX4VIEMVhBXaRCtHa4dlmr7aQ`)
    ])
    .then(r => {
        setSearchItems(r[0].data.items);
      });
    },[]);

    return (
    
<div className="div_videos">


{
    searchItems === undefined ? '': 
    searchItems.map(function(e, index){
   return (<div  key={index}><Video item={e} /></div>)})

}



</div>
  
    );
  }
  
  export default Search;
  