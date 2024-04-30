import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/formData/formSlice';

const Home = () => {
    let[input, setInput] = useState({
        firstname:"",
        lastname:""
    });
    const dispatch = useDispatch();
    let handler = (event)=>{
          setInput((prevInput)=>{
            return {...prevInput,[event.target.name]:event.target.value}
          })
    }
    const addFormDataHandler = (event) =>{
        event.preventDefault();
        dispatch(add(input));
        setInput({firstname:"", lastname:""});
    }
  return (
    <>
     <form onSubmit={addFormDataHandler}>
     <input type="text" id='firstname' name='firstname' onChange={handler} 
     value={input.firstname}/>
     <input type="text" id='lastname' name='lastname' onChange={handler}
     value={input.lastname}/>
     <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default Home