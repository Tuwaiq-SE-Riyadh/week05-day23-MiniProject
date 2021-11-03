const initialState = {
    videos: [],
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