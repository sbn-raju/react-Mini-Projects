import React, { useState } from 'react'

const RestrictCounter = () => {
    // let count = 0;
    let [count, setCount] = useState(0);
    let addValue =()=>{
        if(count<20){
            setCount(count+1);
        }
    }
    let removeValue= ()=>
    {
        if(count>0){
            setCount(count-1);
        }
    }
  return (
    <>
    <h2>This is the Restrict Counter You Can increse or decrese the value in a particular limit</h2>
     <h3>Count: {count}</h3>
     <button onClick={addValue}>Increase Value</button>&nbsp;&nbsp;&nbsp;
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default RestrictCounter