import React, { useState } from 'react'
import './Bill.css'
import { resolveInclude } from 'ejs';

const Bill = () => {
    let[peopleCount, setPeopleCount] = useState("");
    let[peopleAmount, setPeopleAmount] = useState("");
    let[result, setResult] = useState("0");
    let peopleCountHandle = (event)=>{
        setPeopleCount(event.target.value);
    }
    let peopleAmountHandle = (event)=>{
        setPeopleAmount(event.target.value);
    }
    let handleChangeButton = ()=>{
        let result = parseInt(peopleAmount) / parseInt(peopleCount);
        setResult(result);
    }
    let handleFormData =(event)=>{
        event.preventDefault();
        handleChangeButton();
    }

  return (
    <>
       <div className="heading-container">
        <h1>Bill Spliter</h1>
       </div>
       <div className="main-calculator">
       <form onSubmit={handleFormData}>
            <input type='number'
            placeholder='Enter the no.of people'
            name='peopleCount'
            id='people'
            onChange={peopleCountHandle}
            value={peopleCount}/>
            <br /><br />
            <input type="number" 
            placeholder='Enter the Total Amount'
            name='peopleAmount'
            id='amount'
            onChange={peopleAmountHandle}
            value={peopleAmount}/>
            <button type='submit'>Calculate</button>
        </form>
        <br /><br /><br />
        <p>Bill per person:{result}</p>
       </div>
    </>
  )
}

export default Bill