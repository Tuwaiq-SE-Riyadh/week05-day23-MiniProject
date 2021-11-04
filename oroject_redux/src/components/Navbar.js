import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar =({lang,toggleLang})=>{
    {lang === ''}
    return(
<nav style={lang ==='En'?{direction:'ltr'}:{direction:'rtl'}} className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <Link className="navbar-brand" to="/">{lang ==='En'?"Youtube":"يوتيوب"}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
         <Link to="/" className="nav-link">{lang ==='En'?"Hom":"يوتيوب"}</Link>
      </li>
      <li className="nav-item">
        <Link to="/Search" className="nav-link">{lang ==='En'?"Search":"بحث"}</Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item">
        <button onClick={()=>toggleLang('Ar')} className="btn btn-secondary mx-2">Ar</button>
      </li>
      <li className="nav-item">
        <button onClick={()=>toggleLang('En')} className="btn btn-secondary mx-2">En</button>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>


    )
}
export default Navbar