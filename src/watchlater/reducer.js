
const initiastate = {
  watchList: []
}

const listvediotReducer = (state = initialState, { type, payload }) =>

{
  switch (type) {
    
    case "SET_WatchList":
      return {
        watchList: payload

      };
    case "DELETE_WatchList":
     
      return {
        watchList: state.watchList.filter((element) => {
          return element.id !== payload;
          }),
      };
    default:
      return state;
  }
};

export default listvediotReducer;
