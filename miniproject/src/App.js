
import './App.css';
import { Route } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import { useState } from "react";
import Videodetile from './component/Videodetile'
import Viewlater from './component/Viewlater'


function App() {

 

  return (
    <div className="App">
      {/* <Header /> */}
      <Route exact path="/" component={Home} />
      <Route path="/video/:id" component={Videodetile} />
      <Route path="/viewlater" component={Viewlater} />
      
      
  
 
     
    </div>
  );
}

export default App;
