import logo from './qut-logo-large.jpg';
import './App.css';
import React, {useState} from 'react';

//basic animals array
const animals=[
  {
    name:"Lion",
    number:3,
    eats:["Zebra","antelope","buffalo","hippoptamus"]
  },
  {
    name:"Tiger",
    number:5,
    eats:["moos","deer","buffalo"]
  },
  {
    name:"Giraffe",
    number:6,
    eats:["leaves","twigs"]
  },
  {
    name:"Elephant",
    number:4,
    eats:["grass","leaves","flowers","fruit"]
  },
  {
    name:"Monkey",
    number:10,
    eats:["fruit","leaves","vegetables","insects"]
  },
  {
    name:"Lemur",
    number:15,
    eats:["fruit","leaves","insects"]
  },
  {
    name:"Rhinoceros",
    number:2,
    eats:["grass","shoots","leaves","berries"]
  }
];

// //crate componet
// function AnimalComponet(props){
//   return(
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.number}</p>
//       </div>
//   );
// }

//Rest Parameter Syntax
// function sumAll(...args){//args is the name for the array
//   let sum = 0;
//   for(let arg of args){
//     sum+=arg;
//   }
//   return sum;
// }

// alert(sumAll(1));
// alert(sumAll(1,2));
// alert(sumAll(1,2,3));

//error function
// function f(arg1, ...rest, arg2){
//   //arg2 after ...rest ?!
//   //error
// }

//the ...rest must always be last
// function f(arg1, arg2, ...rest){
//   //valid
// }

//destructuring
// const [a,b, ...rest] = [10,20,30,40,50];
// console.log(a);
// console.log(b);
// console.log(rest);

//imporve animal component

// function AnimalComponet({name, number, eats}){
//   return(
//     <div>
//       <h3>{name}</h3>
//       <p>{number}</p>
//       </div>
//   );
// }

//same this
const AnimalComponet = ({name, number, eats}) =>
 (
    <div>
      <h3>{name}</h3>
      <p>{number}</p>
      </div>
  );


function App() {
  const headLines = [
    'first',
    'second',
    'third',
    'fourth',
  ];
  // using hook
  // const [count, setCount] = useState(0);
  // const increment = ()=>{
  //   setCount((oldCount)=> oldCount+1);
  // }

  // const decrement = ()=>{
  //   setCount((oldCount)=> oldCount-1);
  // }

  return (
    <div className="App">
      {/* simple function and class */}
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> }
        <h1>QUT Zoo</h1>
        <p>
          {
            animals.map(animal =>(
              <AnimalComponet {...animal}/>
            ))
          }
        </p>
        <a
          className="App-link"
          href="https://www.qut.edu.au"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header> */}

      {/* Hook example */}
      {/* <h1>Like Counter</h1>
      <p>Overall Count: {count} </p>
      <button onClick ={increment}>Like</button>
      <button onClick ={decrement}>Dislike</button> */}
      {/* <LikeCounter/> */}
      {/* <HeadDline title="Carrot"/>
      <HeadDline title="Banana"/>
      <HeadDline title="Apple"/> */}

      {headLines.map((headline)=><HeadDline title={headline}></HeadDline>)}
    </div>
  );
}

// make function for like, dislike btns
function LikeCounter(){
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount((oldCount)=> oldCount+1);
  }

  const decrement = ()=>{
    setCount((oldCount)=> oldCount-1);
  }
  return(
    <div>
      {/* <h1>Like Counter</h1> */}
      <p>Overall Count: {count} </p>
      <button onClick ={increment}>Like</button>
      <button onClick ={decrement}>Dislike</button>
    </div>
  )
}

function HeadDline({title}) {
  return (
    <div>
      <h1>{title}</h1>
      <LikeCounter/>
    </div>
  );
}

export default App;
