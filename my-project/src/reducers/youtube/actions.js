export const setYoutube = (youtube) => {
  return {
    type: "SET_YOUTUBE",
    payload: youtube,
  };
};
export const setWatch = (youtube) => {
  return {
    type: "WATCH_LATER",
    payload: youtube,
  };
};
