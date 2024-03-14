import { set } from 'mongoose';
import React, { useState } from 'react'

const Form = () => {
 
let[inputFormName, setInputFormName] = useState("");

let handleInputChange = (event)=>{
    setInputFormName(event.target.value);
}

return (
    <>
    <form>
    <input type="text" 
    placeholder='Enter Your Name' 
    id='name' 
    name='name' 
    onChange={handleInputChange} 
    value={inputFormName}/>
    <br /><br />
    <button>Submit</button>
    </form>
    </>
)
}

export default Form