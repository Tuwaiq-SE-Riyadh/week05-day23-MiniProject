
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {setWatchList} from './watchlater/action'


function Home() {

    const dispatch = useDispatch()

  const state = useSelector((state)=>{
      console.log(state)
      return{
        vedios: state.vedioReducer.vedio

      }
  }) 
  console.log(state.vedios)


  return (
    <div>
       {state.vedios.map((element) => {
           const link = "https://www.youtube.com/embed/"
        return (
        <div>
        <iframe width="420" height="315"
        src={link+element.id.videoId}>
        </iframe>
        <button onClick={
            ()=> dispatch(setWatchList(element))
        }>Add watch list</button>
        </div>
        ) })} 
  
    </div>
  );
}

export default Home;












