import React, { useState } from 'react'
import axios from 'axios'


const Forms = () => {
    const[name, setName] = useState("");
    const[age, setAge]=useState(0);
    const[email, setEmail]=useState("");
    const[question_one, setQuestion_One] = useState("");
    const[question_two, setQuestion_Two] = useState("");
    const[imagePath, setImagePath] = useState(null);
    const[msg, setMsg] = useState("");
 
    const handleName=(event)=>{
        setName(event.target.value);
    } 
    const handleAge=(event)=>{
        setAge(event.target.value);
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const handleQuestion_one=(event)=>{
        setQuestion_One(event.target.value);
    }

    const handleQuestion_two=(event)=>{
        setQuestion_Two(event.target.value);
    }
    const handleImage=(event)=>{
      setImagePath(event.target.files[0]);
  }

    


    const handleSubmitChange = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('email', email);
      formData.append('question_one', question_one);
      formData.append('question_two', question_two);
      formData.append('imagePath', imagePath);
  
      try {
          const response = await axios.post("/api/form", formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          console.log("yes");
          setMsg(response.data.message);
      } catch (err) {
          console.log(err);
          setMsg(err.message);
      }
  
    }
  return (
    <>
       <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmitChange} method="post" enctype="multipart/form-data">
        <input type="text" name="name" id="name"  placeholder='Enter your name' onChange={handleName}/>
        <br />
        <input type="number" name="age" id="age"  placeholder='Enter your age' onChange={handleAge}/>
        <br />
        <input type="email" name="email" id="email"  placeholder='Enter your Email' onChange={handleEmail}/>
        <br />
        <label htmlFor="question_one">Suggestion to improve the workshop</label>
        <textarea name="question_one" id="question_one" cols="30" rows="10" onChange={handleQuestion_one}></textarea>
        <br />
        <label htmlFor="question_two">Share your Experience about the workshop</label>
        <textarea name="question_two" id="question_two" cols="30" rows="10" onChange={handleQuestion_two}></textarea>
        <br />
        <input type="file" name="imagePath" id="imagePath" onChange={handleImage} />
        <button type="submit">Submit</button>
        </form>
        <p>{msg}</p>
       </div>
    </>
  )
}

export default Forms