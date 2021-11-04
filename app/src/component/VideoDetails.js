import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";


function VideoDetails(){

    const [video, setvideo] = useState();
    const { id } = useParams();
    const history = useHistory();

    
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyB8Po948nZlW1HHlg_g4r-R10Oz4SmLMRU`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {todo ? (
        <div>
          <p>{todo.id}</p>
          <p>{todo.userId}</p>
          <p>{todo.title}</p>
          <p>{todo.completed + ""}</p>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      ) : (
        ""
      )}

      </div>

    );
}


export default VideoDetails