export const setWatchList = (vedio) => {
    return {
      type: "SET_WatchList",
      payload:vedio ,
      
    };
  };
  
  export const deletevedio = (vedio) => {
    return {
      type: "DELETE_WatchList",
      payload: vedio,
    };
  };