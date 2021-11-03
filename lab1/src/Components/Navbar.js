import '../App.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";




function Navbar() {
  const [search, setSearch] = useState([]);
  const history = useHistory();


  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color: "white"}}  onClick={()=>{
            history.replace("/");
          }}>Home</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{color: "white"}}  onClick={()=>{
            history.replace("/Watches");
          }}>Watched later videos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color: "white"}} >Theme</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
          Language
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item">English</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" >Arabic</a></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{
         setSearch(e.target.value)
        }}/>
        <button className="btn btn-light" type="button" onClick={()=>{
          history.push(`/Search/${search}`)
        }}>Search</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
