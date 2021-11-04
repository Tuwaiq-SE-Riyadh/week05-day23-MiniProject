import Populars from './component/Populars'
import { Route } from 'react-router-dom';
import {VideoDetails} from './component/VideoDetails'
import {Populars} from './component/Populars'

import './App.css';
function App() {


  return (
    <div>
     
     <Route exact path="/" component={Populars} />
      <Route path="/VideoDetails/:id" component={VideoDetails} />
    </div>
  );
}

export default App;
