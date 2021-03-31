import logo from './qut-logo-large.jpg';
import './App.css';
import React, {useState} from 'react';
import {useNewArticles} from './api';


function App() {

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>Something failed</p>
 
  const [name, setName] = useState("");
  const [gender, setGender]=useState("");
  const [error, setError] = useState(null);
 
  return (
    <div className="App">
     <form onSubmit={(event)=>{
       event.preventDefault();
       alert(`Your are subitting ${name}`);
     }}>
     {/* <h1>Hello, {name}</h1> */}
       {name !== "" ?  <h1>Hello, {name}</h1> : null}
       {error !== null ? <h1>{error}</h1>:null}
       <label>Enter your Name: </label>
       <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(event)=>
              {
                if(!/[0-9]/.test(event.target.value)){
                  setError(null);
                }else{
                  setError("Names cannot contain numbers");
                }
                setName(event.target.value);
              }}
      />
      <br/>
      {gender !== "" ?<h1>{gender} is beautiful</h1>  : null }

      <label>Your Gender: </label>
       <input 
            type="text" 
            name="gender" 
            id="gender" 
            value={gender} 
            onChange={(event)=>
              {
                setGender(event.target.value);
              }}
      />
      <br/>
      <input type="submit"/>
       {/* <input type="password" name="pwd" id="pwd"/>
       <input type="submit" name="send" id="send"/> */}
     </form>
    </div>
  );
}


export default App;
