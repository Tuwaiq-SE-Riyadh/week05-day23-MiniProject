export const addvidieo = ( video) => {

    return {
      type: "ADD_VIDEO",
      payload:  video,
    };
  };
  
   export const searchvideo = (video) => {
       return {
      type: "SEARCH_VIDEO",
       payload: video,
     };
   };
   export const watchlater = (videoid) => {
    
    return {
      type: "WATCH_VIDEO",
      payload: videoid,
    };
  };

  export const deletewatchlater = (videoid) => {
    // todoId: is a string representing the todo id
    return {
      type: "DELETE_WATCHLATER",
      payload: videoid,
    };
  };
  
  