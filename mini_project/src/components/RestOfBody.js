import VidieCard from "./VidieCard";
import VideoDetails from "./VideoDetails";
import WatchLaterVideos from "./WatchLaterVideos";
import "./RestOfBody.css"

import { BrowserRouter, Route } from "react-router-dom";


function RestOfBody(){

    return <div className="main">
        <Route exact path="/" component={VidieCard} />
        <Route exact path="/Video-Details/:id" component={VideoDetails} />
        <Route exact path="/Watch-Later-Videos" component={WatchLaterVideos} />
        
    </div>
        
}


export default RestOfBody;


