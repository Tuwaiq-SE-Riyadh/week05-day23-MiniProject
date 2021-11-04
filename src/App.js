
import './App.css';
import axios from 'axios';
import Home from "./Home"
import Search from "./Search"
import "./App.css";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {  useDispatch ,useSelector} from 'react-redux';
import {useEffect} from 'react'
import {setvedio} from "./action"
import Navebar from "./Navebar"
import watchList from './WatchList';


function App() {

  const dispatch = useDispatch();
  
   useEffect(() =>{
  
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyAc6PZ1FbaXNF6JYTaMtO7oACkyz9h7xJQ")
      .then((response) => {
        dispatch(setvedio(response.data.items))
        console.log(response.data.items)
       })
      .catch((error) => console.log(error));
  },[]);


 
  return (
    <div>
      <Navebar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/watchList" component={watchList} />

    </div>
  );
}

export default App;












