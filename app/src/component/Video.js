import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Video({details}){

    const dispatch = useDispatch();
    const history = useHistory();

    return(
        <div>
            <button onClick={() => {history.push(`/VideoDetails/${details.id}`)}}> details</button>
        </div>
    )
}