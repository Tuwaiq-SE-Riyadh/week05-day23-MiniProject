import { Link } from "react-router-dom"

function WatchLaterB({compo}){
    console.log(compo);
    return(
        <>
         
                <div >
                <img src={compo.snippet.thumbnails.default.url} />
               <p  >Title: {compo.snippet.title}</p>
               </div>
               
        </>
    )
}

export default WatchLaterB