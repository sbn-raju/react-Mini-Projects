import React from 'react'
import { useState } from 'react'
import './Area.css'

const Area = () => {
    let[length, setLength] = useState("");
    let[breath, setBreath] = useState("");
    let[area, setArea] = useState("");
    let[perimeter, setPerimeter] = useState("")

    
    let handleLength = (event)=>{
        setLength(event.target.value);
    }
    let handleBreath = (event) =>{
        setBreath(event.target.value);
    }
    let calculateArea = ()=>{
        setArea(()=>{
            return area = parseInt(length) * parseInt(breath);
        });
    }
    let calculatePerimeter = ()=>{
        setPerimeter(()=>{
            return perimeter = 2 * (parseInt(length) + parseInt(breath));
        });
    }
  return (
   <>
    <div className="navbar">
        <h1>Area And Parameter</h1>
    </div>
    <div className="main-container">
        <div className="container">
            <input type="text" 
            placeholder='Enter the Length'
            value={length}
            onChange={handleLength}/>
            <input type="text"
            placeholder='Enter the Breath' 
            value={breath}
            onChange={handleBreath}/>
            <button onClick={calculateArea}>Calculate Area</button>
            <button onClick={calculatePerimeter}>Calculate Perimeter</button>
            <p>Area:{area}</p>
            <p>Perimeter:{perimeter}</p>
        </div>
    </div>
   </>
  )
}

export default Area