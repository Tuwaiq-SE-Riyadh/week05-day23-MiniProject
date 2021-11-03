import { Link } from 'react-router-dom';


function video(item) {

  return (
<Link to={"/Details/"+item.item.id.videoId}>


<div className="div_s">
<iframe src={"https://www.youtube.com/embed/"+item.item.id.videoId} width="100%" height="70%" title="video"></iframe>
<p className="p0">{item.item.snippet.title}</p>


</div>
</Link>
  );
}

export default video;
