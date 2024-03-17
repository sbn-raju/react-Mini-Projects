import React, { useState } from 'react'
import './Speed.css'

const Speed = () => {
    let[speed, setSpeed] = useState("");
    let[distance, setDistance] = useState("");
    let[time, setTime] = useState("");

    let handleSpeed = (event)=>{
        setSpeed(event.target.value);
    }
    let handleDistance = (event)=>{
        setDistance(event.target.value);
    }
    let calculateTime = (event)=>{
        setTime(()=>{
            return time = parseInt(distance)/parseInt(speed)
        })
    }

  return (
    <>
      <div className="navbar">
        <h1>Time Counter</h1>
      </div>
      <div className="main-container">
        <div className="container">
            <input type="text"
            placeholder='Enter the Speed'
            value={speed}
            onChange={handleSpeed}/>
            <input type="text"
            placeholder='Enter the Distance' 
            value={distance}
            onChange={handleDistance}/>
            <button onClick={calculateTime}>Calculate</button>
            <p>Time required to travel the distance of {distance} is: {time}</p>
        </div>
      </div>
    </>
  )
}

export default Speed