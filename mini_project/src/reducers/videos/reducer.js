const initialState = {
    videos: [],
    watchLater : []
};

const videosReducer = (state = initialState, {type , payload}) => {

    switch (type) {
        case "SET_VIDEOS":
            return{
                videos:payload,
                watchLater: state.watchLater,
                // هنا نرجع القيمة القديمة , بدال ما في كل مره يصفرها لو كان فيها قيمة
                // watchLater: state.watchLater, 
            }
            break;
        case "SET_WATCH_LATER":
            const array = state.watchLater.slice()
            array.push(payload)
            return{
                videos:state.videos,
                watchLater:array,
            }
            break;
        case "DELETE_VIDEO":
            return{
                videos:state.videos,
                watchLater:state.watchLater.filter((element)=>{
                    if(element.id !== payload)
                    {
                        return element;
                    }
                }),
            }
            break;
    
        default:
            return state;
    }
}

export default videosReducer;