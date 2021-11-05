
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../reducers/user/actions";
import axios from "axios"
import {  useHistory } from "react-router";
import { Button ,FormControl,InputGroup,Container,Navbar } from 'react-bootstrap';

function Search (){
  const history = useHistory();
    const dispatch = useDispatch();
    const[inputSearch,setinputSearch]=useState("")
  


    function inputSearch1(e){  
        setinputSearch(e.target.value)
       
      }

   const searchid= () => {
       console.log(inputSearch);
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputSearch}&key=AIzaSyBfh1M8w3UXnjlU_tOZ4IyKHsopwKR3LZA`)
    .then((response) => {       
    //   console.log(response.data);
      const action = setVideos(response.data.items);
      dispatch(action);
     
    })
    .catch((err) => {
      console.log(err);
    });
   }
   const page=()=>{
    history.push(`/WatchLater`)
   }

    return(
        <div>
         
  <Navbar className="navBar" expand="lg" variant="light" bg="light">
   
      <Navbar.Brand> <Button variant="outline-danger"  onClick={page}> WatchLater </Button>  </Navbar.Brand>
    
  </Navbar>

           <Container > 

          <InputGroup className="sm-1 ">
    <FormControl
      placeholder=" search"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={inputSearch} 
      onChange={inputSearch1}
      className="input23"
    />
    <Button variant="outline-danger"  onClick={searchid}>
    search
    </Button>
  
  </InputGroup>

  </Container>
  
        </div>
    )
}
export default Search;