const initialState = {
    videos: [],
    viewLater:[],
  };
 
  const videosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case "SET_VIDEOS":
        return {
          videos: payload,
          viewLater:state.viewLater.slice(),

        };
        case "DELET_VIEW_LATER":
          console.log(state.viewLater)
          return {
            
            videos: state.videos,
            viewLater: state.viewLater.filter((element) => {
              return element !== payload;
            }),
          };
        
  
      case "ADD_VIEW_LATER":
        const array = state.viewLater.slice()
        array.push(payload)
        
        return {
          
          viewLater:array,
          videos:state.videos,
        };
  
      default:
        return state;
    }
  };
  
  export default videosReducer;
  