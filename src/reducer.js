const initiastate = {
    vedio: []
}

const vedioReducer = (state = initiastate, { type, payload }) => {


    switch (type) {
        case "ADD_VEDIO":
            return {
                vedio: payload
            };

        default:
            return state

    }
}
    ;
export default vedioReducer;



