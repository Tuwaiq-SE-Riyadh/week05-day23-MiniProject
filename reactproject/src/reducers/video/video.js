const initialState = {
    video: []
  };
  // action -> {type: "ABC", payload: 2}
  const videoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an object
      case "SET_VIDEO":
        return {
          video: payload,
        };
      default:
        return state;
    }
  };
  
  export default videoReducer;