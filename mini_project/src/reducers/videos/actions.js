// !!!!!!!!!! this is test action !!!!!!!!!!
export const setVideos = (videosList)=> {
    return {
        type:"SET_VIDEOS",
        payload:videosList
    };
};

export const setWatchLater = (video)=> {
    return {
        type:"SET_WATCH_LATER",
        payload:video
    };
};

export const deleteVideo = (videoId) => {
    return {
        type:"DELETE_VIDEO",
        payload:videoId
    }
}