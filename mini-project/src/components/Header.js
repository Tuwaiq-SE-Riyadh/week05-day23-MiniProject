import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header">
        <div>
            <Link to="/" className="logo">Youtube Videos</Link>
        </div>

        <div>
        <Link to="/Watchlater">Your List</Link>

        </div>
        </div>
    )
}

export default Header;