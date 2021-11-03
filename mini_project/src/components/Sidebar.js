import { useHistory } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import "./Sidebar.css"



function Sidebar(){

    const history = useHistory();

    const showWatchLaterVideos = ()=>{
        // console.log("showWatchLaterVideos")
        // history.push("Watch-Later-Videos")  
        history.replace("/Watch-Later-Videos")  
    }

    const showHome = ()=>{
        history.replace("/")  
    }

    return <div className="sidenav">
    <a onClick={showHome}><HomeIcon fontSize="large"/></a>
    <a onClick={showWatchLaterVideos}><WatchLaterIcon fontSize="large"/></a>
    </div>
        
}


export default Sidebar;


