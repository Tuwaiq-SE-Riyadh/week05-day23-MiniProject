const initialState = {
    videos: [],
    watchLater: [],
};

const videos = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_VIDEOS":
            return {
                videos: payload,
            };
        
        case "SEARCH_VIDEOS":
            return {
                videos: payload,
            };

        case "WATCH_LATER":
            const watchL = state.watchLater.slice()
            watchL.push(payload)
            return {
                videos: state.videos,
                watchLater: watchL,
            };

        case "DELETE_WATCH_LATER":
            return {
                videos: payload,
                watchLater: state.watchLater.filter((element) => {
                    return element.channelId !== payload.channelId;
                }),
            };

        default:
            return state;
    }
};

export default videos;

export const addVideos = (videos) => {
    return {
        type: "ADD_VIDEOS",
        payload: videos,
    };
};

export const searchVideos = (videos) => {
    return {
        type: "SEARCH_VIDEOS",
        payload: videos,
    };
};

export const watchLater = (videos) => {
    return {
        type: "WATCH_LATER",
        payload: videos,
    };
};

export const deleteWatchLater = (videos) => {
    return {
        type: "DELETE_WATCH_LATER",
        payload: videos,
    };
};