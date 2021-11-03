export const setVideos = (videos) => {
    
    return {
      type: "SET_VIDEOS",
      payload: videos,
    };

    
}

export const addViewLater = (video) => {
    
  return {
    type: "ADD_VIEW_LATER",
    payload: video,
  };

  
}

export const deletViewLater = (video) => {
    
  return {
    type: "DELET_VIEW_LATER",
    payload: video,
  };

  
}
