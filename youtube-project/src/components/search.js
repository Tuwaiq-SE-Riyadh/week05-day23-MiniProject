import { useSelector } from "react-redux"
import SearchComponents from "./searchComponents";

function SearchPage(comp){
    

    const state = useSelector((state)=>{
        return {
          searchText: state.Search.search,
        }
      })
     

      
      return(
          <>
          
            <div className="searchResult">
            {state.searchText.map(e=>{
                return(
                <SearchComponents components={e}/>
                )
            })}
        
            </div>
            
          </>
      )
}

export default SearchPage