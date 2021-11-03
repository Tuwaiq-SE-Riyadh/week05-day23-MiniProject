import { Link } from "react-router-dom"

import { setVideo } from "../reducers/video/action"
import { useDispatch } from "react-redux"

const OnePopular = (popular) =>{
    const dispatch = useDispatch()
    // console.log(popular.popular);
    return(
        <>
           {popular.popular.map((e)=>{
               return (
               <>
               
               <div className="cardDiv" key={e.id.videoId} onClick={()=>{
                  const action= setVideo(e)
                  dispatch(action)
                  
               }}>
               <Link to='/watching'>
               
               <img src={e.snippet.thumbnails.default.url} />
               <p  >Title: {e.snippet.title}</p>
               </Link>
               </div>
               </>
           )
           })}

        </>
    )
    
}

export default OnePopular