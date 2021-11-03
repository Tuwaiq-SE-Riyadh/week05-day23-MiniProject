import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import WatchLaterB from "./watchLaterB";

function WatchLaterPage(){
    const state = useSelector((state)=>{
        return {
          listLater: state.WatchLater.watchLater,
        }
      })
      console.log(state.listLater);
return(
    <>
    
  
        <div className="searchResult">
        
            {state.listLater.map(e=>{
               return( 
                <WatchLaterB compo={e}/>
                )
            })}
                

        </div>
    </>
)

}

export default WatchLaterPage