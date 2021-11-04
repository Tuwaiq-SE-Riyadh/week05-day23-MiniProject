export const setvedio = (vedio) => {
  return {
    type: "ADD_VEDIO",
    payload: vedio,
  };
};


export const setsearch = (vedio) => {
  return {
    type: "SEARCH_VIDEOS",
    payload: vedio,
    
  };
};