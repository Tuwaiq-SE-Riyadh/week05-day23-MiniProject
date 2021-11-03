const initialState ={
    search:[],
}

const Search = (state = initialState,{type,payload})=>{
    switch (type){
    case "SET_SEARCH":
        return {
            search:payload,
        }
        default:
            return state;
    }
        
};

export default Search