export const setVideos = (PopularVideos) => {
    // todos: is an array of todo objects
    return {
      type: "DISPLAY_VIDEOS",
      payload: PopularVideos,
    };
  };
  
  export const addWatch = (PopularVideos) => {
   
    return {
      type: "ADD_WATCH",
      payload: PopularVideos,
    };
  };
  
//   export const toggleCompleted = (todoId) => {
//     return {
//       type: "TOGGLE_COMPLETED",
//       payload: todoId,
//     };
//   };
  