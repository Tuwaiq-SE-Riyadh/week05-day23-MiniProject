const initialStete ={
    videos:[],
};

const videoReducer=(state=initialStete ,{type,payload})=>{
switch (type) {
    case "SET_VIDEOS":  
        return {
            videos:payload,
        }

    default:
        return state;
}
}


export default videoReducer;