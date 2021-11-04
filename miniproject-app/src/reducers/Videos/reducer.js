const initialState = {
    popularVideos: [],
  };
  // action -> {type: "ABC", payload: 2}
  const videosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "DISPLAY_VIDEOS":
        return {
          popularVideos: payload,
        };
  
      case "ADD_WATCH":
        const array=state.popularVideos.splice();
        array.push(payload)
        return {
          popularVideos: array,
          
        };
    //   case "TOGGLE_COMPLETED":
    //     // the payload is the id
    //     return {
    //       todos: state.todos.map((element) => {
    //         if (element.id === payload) {
    //           element.completed = !element.completed;
    //           return element;
    //         }
    //         return element;
    //       }),
    //     };
  
      default:
        return state;
    }
  };
  
  export default videosReducer;
  