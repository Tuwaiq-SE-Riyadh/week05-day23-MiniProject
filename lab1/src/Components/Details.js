import { useEffect, useState } from 'react';
import axios from 'axios';
import {addTolist} from "../reducers/watch_later/watch_later"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";




function Details(props,item) {

  const history = useHistory();


  const dis = useDispatch();
  



    const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${props.match.params.id}&key=AIzaSyB3C97imkPX4VIEMVhBXaRCtHa4dlmr7aQ`)
    ])
    .then(r => {
        setDetails(r[0].data.items);
      });
      
    },[]);

    return (
    
  <div id="details2">


{
  details === undefined ? '': 
  details.map(function(e, index){
   return (e.id === props.match.params.id ?

<div key={index}>
<iframe src={"https://www.youtube.com/embed/"+e.id} width="100%" height="220px" title="video"></iframe>
<p>Title : {e.snippet.title}</p>
<hr/>
<p>Published : {e.snippet.publishedAt}</p>
<hr/>
<p>Channel : {e.snippet.channelTitle}</p>
<hr/>
<p>Description : {e.snippet.description}</p>
<hr/>
<button id="button2" type="button" className="btn btn-secondary" onClick={()=>{
  dis(addTolist(e)); 
    history.replace("/Watches");


}}>Watch later</button>


</div>
    
    
    :'')})

}


  </div>
  
    );
  }
  
  export default Details;
  