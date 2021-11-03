export const setVideoList = (video) => {
    // video: is an array of todo objects
    return {
      type: "SET_LIST_VIDEOS",
      payload: video,
    };
  };
  
  export const deleteVideo = (videoId) => {
    // videoId: is a string representing the todo id
    return {
      type: "DELETE_VIDEO",
      payload: videoId,
    };
  };