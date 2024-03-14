import React, { useState } from 'react'

const Form = () => {
    let[formData, setInputformData] = useState({
        username :"",
        password :""
    });
    let handleChangeInput = (event)=>{
        setInputformData((currData)=>{
            return {...currData, [event.target.name]:event.target.value} 
        })
    }
  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" 
        placeholder='Usename'
        id='username'
        value={formData.username}
        onChange={handleChangeInput}
        name='username'/>
        <br/><br/>
        <label htmlFor="Password">Password</label>
        <input type="password" 
        placeholder='Password'
        id='Password'
        value={formData.password}
        onChange={handleChangeInput}
        name='password'/>
        <br /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form