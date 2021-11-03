export const setVideo = (videos) => {
    // videos: is an array of objects
    return {
      type: "SET_VIDEOS",
      payload: videos,
    };
  };

export const searching = (videos) => {
    // videos: is an array of objects
    return {
      type: "SEARCH_VIDEOS",
      payload: videos,
    };
};
