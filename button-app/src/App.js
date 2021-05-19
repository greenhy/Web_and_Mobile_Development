// import logo from './logo.svg';
import './App.css';

const API_URL = "http://localhost:3001/api";

function update(){
  fetch(`${API_URL}/update`,{
    method: "POST",
    body:'City=Shanghai&CountryCode=CHN&Pop=24183300',
    headers:{
      "Content-type":"application/x-www-form-urlencoded"
    }
  }).then((res)=>{
    res.json()
  }).then((res)=>{
    console.log(res)
  }
  )
}

function App() {
  return (
    <div className="App">
      <h1>The DB Upload Example</h1>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;
