const initialState = {watchesList : []};


const Watches  = (state = initialState, { type, payload }) => {
  switch (type) {


    case "ADD_TO_WATCHES_LIST":
      
      return {watchesList: [
        ...state.watchesList,
          {payload}
      ] }
    case "DELETE_ITEM":
      let x = state.watchesList;
      const index = x.indexOf(payload);
      x.splice(index, 1);
      return {watchesList: x }

    default:
      return state;
  }
};



export const addTolist  = (e) => {

  return {type: "ADD_TO_WATCHES_LIST",payload: e};
};

export const deleteItem  = (e) => {

  return {type: "DELETE_ITEM",payload: e};
};


export default Watches;

