import { useSelector } from "react-redux"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setVideo } from "../reducers/video/action";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setSearch } from "../reducers/search/actions";
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