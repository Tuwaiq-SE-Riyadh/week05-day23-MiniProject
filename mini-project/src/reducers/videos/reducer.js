const initialState = {
    videos: [],
};

const videosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "SET_VIDEOS":
        return {
          videos: payload,
        };
      // the payload is an array
      case "SEARCH_VIDEOS":
        return {
          videos: payload,
        };
      default:
        return state;
    }
  };
  
  export default videosReducer;
  