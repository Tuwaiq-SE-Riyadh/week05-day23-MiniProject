import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Topbar() {
  const [searchWord, setSearchWord] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
 
  return (
    <>
      <div className="topbar">
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => {
            setSearchWord(e.target.value);
            // console.log(e.target.value);
            // history.push(`/Videos/search/${e.target.value}`);
          }}
        />
        <button
          onClick={() => {
            history.push(`/Videos/search/${searchWord}`);
          }}
        >
          Search
        </button>
      </div>
      <div className="topbar-btns">
        <button>Music</button>
        <button>Mix</button>
        <button>Food</button>
        <button>live</button>
        <button>Gaming</button>
      </div>
    </>
  );
}
export default Topbar;
