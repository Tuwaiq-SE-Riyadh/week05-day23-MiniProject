
import { useHistory } from "react-router-dom";
function Disply({videoId,title}){
    const history = useHistory();
    return(
        <div>
<iframe width="420" height="315"
src='https://www.youtube.com/embed/${videoId}'>
</iframe>
<div> 
<p> {title} </p> 
<button onClick={() => {history.push(`/Videos/PageDetalis/${videoId}`)}}> Details</button>
</div>


        </div>
    )
}
export default Disply;