const initialState ={

    detailsInformation: [],
    whachlater: []
};

const detailsReducer = (state = initialState, {type, payload}) =>{

    switch (type) { 

        case "SET_POPULARS":   
        return{
            
            detailsInformation: payload,
           // whachlater: state.whachlater عشان مايصفره اذا مافيع شي تعدل عليه
        };
       
        default:
            return state;
    }
}

export default detailsReducer