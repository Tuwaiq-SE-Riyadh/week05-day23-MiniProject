const initialState ={
    watchLater:[],
}

const WatchLater = (state = initialState,{type,payload})=>{
    switch (type){
    case "ADD_WATCH_LATER":

        return {
            watchLater:[...state.watchLater, payload],
        }
        default:
            return state;
    }
        
};

export default WatchLater