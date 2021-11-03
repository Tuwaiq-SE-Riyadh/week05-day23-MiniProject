import { Link, Route, useParams, useHistory } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "./App";

function Navbar(){

    // const userContext = useContext(UserContext)

    return (
        <div className="links">

          <Link  to="/">Home</Link>

          <Link to="/search">Search</Link>
          
        </div>
      );
}

export default Navbar;