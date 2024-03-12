import React, { useState } from 'react'

const Counter = () => {
//    let counter = 0;
   let[counter, setCounter] = useState(0);
   let incValue = ()=>{
    setCounter(counter+1);
   }
   let decValue = ()=>{
    setCounter(counter-1);
   }
  return (
    <>
    <h1>This is the Counter:{counter}</h1>
    <button onClick={incValue}>Increase Value</button>&nbsp;&nbsp;&nbsp;
    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default Counter