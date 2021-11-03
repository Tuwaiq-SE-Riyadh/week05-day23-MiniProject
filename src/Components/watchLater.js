import { useSelector } from "react-redux";

function Watchlater() {
  const state = useSelector((state) => {
    return {
      watchlater: state.watchVideoReducer.watchlater,
    };
  });
  console.log(state);

  return (
    <>
      <div>
        <p>Title: {state.watchlater.snippet.title}</p>
        <img src={state.watchlater.snippet.thumbnails.high.url} />
        <p>Title: {state.watchlater.snippet.title}</p>
        <p>channel {state.watchlater.snippet.channelTitle}</p>
        <div className="card-btns">
          <button>watch later</button>
        </div>
      </div>
    </>
  );
}
export default Watchlater;
