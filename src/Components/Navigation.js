import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import logo from "./YouTube-Logo-PNG7.png";
import home from "./home.png";

import {changeTheme} from '../reducers/themes/action'
import { useContext } from "react";
import { UserContext } from "../App";

function Navigation() {
  const history =useHistory()
  const theme = useContext(UserContext)
  const dispatch = useDispatch();
  return (
    <>
      <div className="nav">
        <ul className={`${theme}`}>
          <li>
            <img src={logo} />
          </li>
          <li>
            
            <a className="active" onClick={()=>{
               history.push(`/`);
            }}> Home</a>
          </li>

          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>subscribe</a>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul className={`${theme}`}>
          <li>
            <a>Library</a>
          </li>
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Watch later</a>
          </li>
          <li>
            <a>Likes</a>
          </li>
          <li>
            <a>Whatch later</a>
          </li>
          
        </ul>
      </div>
      <div className="nav">
        <ul className={`${theme}`}>
          <li>
            <a>Library</a>
          </li>

          <li>
            <a>Watch later</a>
          </li>
          <li>
            <a>Likes</a>
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul className={`${theme}`}>
          <li>
            <a onClick={()=>{
              const action = changeTheme("light-theme")
              dispatch(action)
            }}>Light</a>
          </li>

          <li>
            <a onClick={()=>{
              const action = changeTheme("dark-theme")
              dispatch(action)
            }}>Dark</a>
          </li>
          
        </ul>
        
      </div>
      <div className="nav" ><p className="cc">AboutPressCopyrightContact usCreatorAdvertiseDevelopers
TermsPrivacyPolicy SafetyHow YouTube worksTest new features
© 2021 Google LLC</p></div>
    </>
  );
}
export default Navigation;
