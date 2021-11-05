
import { useHistory } from "react-router-dom";
function Disply({videoId,title}){
    const history = useHistory();
    return(
        <div  onClick={() => {history.push(`/Videos/PageDetalis/${videoId}`)}}className="min">
<iframe  width="420" height="315"
src='https://www.youtube.com/embed/${videoId}'>
</iframe >
<div> 
<p> {title} </p> 

</div>


        </div>
    )
}
export default Disply;