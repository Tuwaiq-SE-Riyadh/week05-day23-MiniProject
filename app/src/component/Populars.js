import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Video from './Video'
import setPopulars from '../reducers/actions'


function Populars(){

  const Key = "AIzaSyAHRXhlquUBi-PsBSaFe5POPo_pMobrpXw"
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log("state "); console.log(state);
    
    return {
        detailsInformation: state.detailsReducer.detailsInformation,
        
    };
  });

useEffect( () => {
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=${Key}`)
    .then((response) => {
    console.log("response"); console.log( response.data.items);
    const action = setPopulars(response.data.items);
    console.log("action"); console.log( action);
    dispatch(action);
  })
  .catch(error => console.log(error))
},[]);
  

  return(
    <div>

    {state.detailsInformation.map((element) => {
      return <Video details={element} key={element.id.videoId} />;
    })}
  </div>
);
};

//key = {element.id.videoId} 

export default Populars

/*

   <div>
       
       <nav class="navbar">
    <div class="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" class="logo" alt=""/>
    <div class="search-box">
        <input type="text" class="search-bar" placeholder="search"/>
        <button class="search-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png.PNG" alt=""/>
        </button>
    </div>
    <div class="user-options">
        <img src="" class="icon" alt=""/>
        <img src="img/grid.PNG" class="icon" alt=""/>
        <img src="img/bell.PNG" class="icon" alt=""/>
        <div class="user-dp">
            <img src="https://s.alqabas.com/wp-content/uploads/2017/02/Walt-Disney-Logo-iPad-Wallpaper-HD-nhL25gcV1Tb6HYB6SBCJmNG4tMKvlcK5SrUEEsBvohd-card.jpg" alt=""/>
        </div>
    </div>
</nav>
       
<div class="side-bar">
    <a href="#" class="links active"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHPFrVwyqAvtpPFh3tg7851RZb2Qtnok012H_MkV-mN1v7otTPKE9jPSYTxmMX1dvJbc&usqp=CAU" alt=""/>home</a>
    <a href="#" class="links"><img src="https://banner2.cleanpng.com/20180614/wrt/kisspng-computer-icons-clock-timer-hamburger-button-time-icon-5b221ba3dee3a5.964189021528961955913.jpg" alt=""/>watch leater</a>

</div>

         
                {
                    state.detailsInformation.map((element) =>{ // index  key={element.index} 
                        return (

                            <div class="video-container">
                            <div class="video">
                                <img src={element.snippet.thumbnails.high.url} alt=""/>
                                <div class="content">
                                    <img src={element.snippet.thumbnails.high.url} class="channel-icon" alt=""/>
                                    <div class="info"> 
                                        <h4 class="title">{element.snippet.title}</h4>
                                        <p class="channel-name">{element.snippet.channelTitle}</p>
                                    </div>                                    
                                </div>
                                <button className="details" onClick={() => {history.push(`/details/${todo.id}`)}}>details</button>  
                              </div>
                            </div> 
                        )
                    })
                }

    </div>

    */