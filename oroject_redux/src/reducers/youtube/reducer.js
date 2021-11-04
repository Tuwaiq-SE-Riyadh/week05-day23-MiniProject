const initialState = {
    video: [],//value=state.video  state = initialState  video :
    watchlater:[]
  };
  const youtubeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_VIDEO":
        return {
          video: payload,
        };
  
      case "SEARCH_VIDEO":
        
        return {
          
          video: payload
          
        }
          
        
          case "WATCH_VIDEO":
        const wachlater=state.watchlater.slice()
        wachlater.push(payload)
          return {
            // video:[...state.video,{payload}]}
             video: state.video,
             watchlater:wachlater
               
          }
            case "DELETE_WATCHLATER":
      //  the payload is the id
      return {
        video:payload,
        watchlater: state.watchlater.filter((element) => {
          return element.channelId!== payload.channelId ;
        }),
      };
    
      
  
      default:
        return state;
    }
  };
  
  export default youtubeReducer;
  