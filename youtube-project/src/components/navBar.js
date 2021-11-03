import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setSearch } from "../reducers/search/actions"
import axios from "axios"
import { useEffect } from "react"


function NavBar(){
    const dispatch = useDispatch()
    const [searchText,setSearchText] = useState()
    const getSearch =(e)=>{
        const value = e.target.value
        setSearchText(value)
    }
    const GetSearchValue = ()=>{
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchText}&key=AIzaSyDkbuPNrn6rDX1xsHmj07xQqntviV1fSH0`)
          .then((response) => {
            const action = setSearch((response.data.items)) 
            dispatch(action)
          })
          .catch((err) => {
            console.log(err);
          });
    }
   
    
    return(
        <>
         <div className="links">
    <ul className="listU">
    {/* <BrowserRouter> */}
       <li className="listl" ><Link to="/" className="listlA">Home </Link></li>
       <li className="listl" ><Link to="/watchLater" className="listlA">Watch Later</Link></li>
       <li className="listl" ><input type="text" onChange={getSearch} className="textNav"/></li>
       <li className="listl" ><Link onClick={GetSearchValue} to="/search"  className="listlA">Search</Link></li>
       {/* </BrowserRouter> */}
       </ul>
       </div>
        </>
    )
}
export default NavBar