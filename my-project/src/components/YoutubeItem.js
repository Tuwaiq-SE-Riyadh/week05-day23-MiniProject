import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Card } from "react-bootstrap";

const YoutubeItem = ({ youtubeItem }) => {
  const history = useHistory();
  const url = "https://www.youtube.com/embed/";
  return (
    <div>
      <Card className="bg-dark " style={{ width: "25rem" }}>
        <Card.Body>
          <iframe
            width="350"
            height="300"
            src={url + youtubeItem.id.videoId}
          ></iframe>

          <button
            onClick={() => {
              history.push(`/videoDetails/${youtubeItem.id.videoId}`);
            }}
          >
            Details
          </button>
          <button>Watch Later</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default YoutubeItem;
