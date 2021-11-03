
import './style.css';
import { Link } from "react-router-dom";




function Header() {


  return (
    <div class="topnav">
    <a ><Link to="/Home">Home</Link></a>
    <a ><Link to="/Search">Search</Link></a>


  </div>
      

  );
}


export default Header;