const initialState = {
    video: [],//value=state.video  state = initialState  video :
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
          
        case "DELETE_VIDEO":
        
          return {
            video: state.video.filter((element) => {
              return element.id !== payload;
              
            }),
          };
          case "WATCH_LATER":
        const wachlater=state.watchlater.slice()
        wachlater.push(payload)
          return {
            video: state.video,
            watchlater:wachlater
               
            }
            case "DELETE_WATCHLATER":
      // the payload is the id
      return {
        video: state.video.filter((element) => {
          return element.id !== payload.channelId ;
        }),
      };
    
      
  
      default:
        return state;
    }
  };
  
  export default youtubeReducer;
  