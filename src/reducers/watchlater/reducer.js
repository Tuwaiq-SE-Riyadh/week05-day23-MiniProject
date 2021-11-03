const initialState = {
  watchlater: [],
};
const watchVideoReducer = (state = initialState, { type, paylaod }) => {
  console.log(paylaod, state.watchlater);
  switch (type) {
    case "ADD_VIDEOS_FOR_WATCH":
      return {
        watchlater: state.watchlater.push(paylaod),
      };

    default:
      return state;
  }
};
export default watchVideoReducer;
