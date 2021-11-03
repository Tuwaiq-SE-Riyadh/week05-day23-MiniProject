const initialState = {
    listvideos: [],
};

const listvideosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // the payload is an array
      case "SET_LIST_VIDEOS":
        return {
            listvideos: [...state.listvideos, payload]
        };
      case "DELETE_VIDEO":
        // the payload is the id
        return {
            listvideos: state.listvideos.filter((element) => {
            return element.id !== payload;
            }),
        };
      default:
        return state;
    }
  };
  
  export default listvideosReducer;
  