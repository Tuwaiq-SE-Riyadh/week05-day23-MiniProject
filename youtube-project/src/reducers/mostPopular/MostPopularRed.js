const initialState ={
    mostPopular:[],
}

const mostPopularReducer = (state = initialState,{type,payload})=>{
    switch (type){
    case "SET_POPULAR":
        return {
            mostPopular:payload,
        }
        default:
            return state;
    }
        
};

export default mostPopularReducer