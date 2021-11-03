const initialState = {
  videos: [],
};

const videosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOS":
      return {
        videos: payload,
      };

    case "REMOVE_VIDEO":
      return {
        videos: [],
      };

    default:
      return state;
  }
};
export default videosReducer;
