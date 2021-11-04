const initialState = {
    watchLater: [],
  };
  const videoListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_LIST":
            return {
               watchLater: [...state.watchLater, payload],
        };
        case "DELETE_VID":
            return { 
                watchLater: state.watchLater.filter((e) => {
                    return e.id !== payload;
                    }),
            };
      default:
        return state;
    }
  };
  
  export default videoListReducer;