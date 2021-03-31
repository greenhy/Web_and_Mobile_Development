import React, {useState} from "react";

export function Headline({title}) {
    return (
        <div>
        <h1>{title}</h1>
        <LikeCounter/>
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
  
