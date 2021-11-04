import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/WatchLater">Watch Later</Link>
    </div>
  );
}
export default NavBar;
