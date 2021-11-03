import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setVideo } from "../reducers/video/action"

const SearchComponents =({components}) =>{
    const dispatch = useDispatch()
    if (components===undefined){
     return(<>
     {/* {alert("Loding")} */}
     </>)

    }
    else{
        return(
            <>
            <Link to='/watching'>
            <div className="resultPage" onClick={()=>{
                  const action= setVideo(components)
                  dispatch(action)
                  
               }}>
            
               <img src={components.snippet.thumbnails.default.url} />
               <p  >Title: {components.snippet.title}</p>
               
               </div>
               </Link>
               </>
    
        )
    }    
    
}



export default SearchComponents