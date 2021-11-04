import { useHistory } from "react-router-dom";


function Video({id}) {
    const history = useHistory();
    let srcVid =`https://www.youtube.com/embed/${id}`
    return (
      <div className="videoList">
            <iframe width="420" height="315"
                src={srcVid}>
            </iframe>
            <button onClick={() => {history.push(`/video/${id}`)}}> Details</button>

      </div>
    );
}
  
export default Video;