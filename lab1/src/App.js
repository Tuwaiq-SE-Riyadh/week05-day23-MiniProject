import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Details from './Components/Details';
import { Route } from "react-router-dom";
import Search from './Components/Search';
import Watch from './Components/Watch';

function App() {


  return (
    <div >
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Details/:id" component={Details} />
      <Route path="/Search/:id" component={Search} />
      <Route path="/Watches" component={Watch} />

    </div>
  );
}

export default App;