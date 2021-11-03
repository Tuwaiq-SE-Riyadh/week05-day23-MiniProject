export const setwatchLater = (videos) => {
  return { type: "SET_VIDEOS_FOR_WATCH", payload: videos };
};

export const addwatchLater = (video) => {
  console.log(video);
  return { type: "ADD_VIDEOS_FOR_WATCH", paylaod: video };
};
