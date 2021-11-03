const initialState ={
    video:[],
}

const Video = (state = initialState,{type,payload})=>{
    switch (type){
    case "SET_VIDEO":
        return {
            video:payload,
        }
        default:
            return state;
    }
        
};

export default Video