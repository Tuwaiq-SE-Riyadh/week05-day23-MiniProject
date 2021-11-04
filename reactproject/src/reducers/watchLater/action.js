export const setList = (watchLater) => {
    return {
      type: "SET_LIST",
      payload: watchLater
    };
  };

export const deleteVideo = (watchLater) => {
    return {
      type: "DELETE_VID",
      payload: watchLater
    };
  };
  