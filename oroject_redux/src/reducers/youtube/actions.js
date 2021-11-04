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
   export const watchlater = (video) => {
    
    return {
      type: "WATCH_VIDEO",
      payload: video,
    };
  };

  export const deletewatchlater = (videoid) => {
    
    return {
      type: "DELETE_WATCHLATER",
      payload: videoid,
    };
  };
  
  