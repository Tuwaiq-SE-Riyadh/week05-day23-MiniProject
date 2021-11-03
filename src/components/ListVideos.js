
import Disply from "./Disply";

function ListVideos( {Videos}){
    return(
        <div>
<Disply  videoId={Videos.id.videoId} title={Videos.snippet.title}   />


{/* <iframe width="420" height="315"
src='https://www.youtube.com/embed/${videoId}'>
</iframe>
<div> 
<p> {title} </p> 
</div>
<div>
<p> {describe} </p>
</div> */}
 
        </div>
    )
}
export default ListVideos;