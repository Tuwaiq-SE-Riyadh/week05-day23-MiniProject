export const setVideos = (videos) => {
    // user: is an object that represents a user
    return {
      type: "SET_VIDEOS",
      payload: videos,
    };
  };
  export const WatchLater = (videos) => {
    // user: is an object that represents a user
    return {
      type: "WATCH_LATER",
      payload: videos,
    };
  }; 
  // deleteWatchLater
  export const deleteWatchLater = (videos) => {
    // user: is an object that represents a user
    return {
      type: "DELETE_WATCHLATER",
      payload: videos,
    };
  }; 