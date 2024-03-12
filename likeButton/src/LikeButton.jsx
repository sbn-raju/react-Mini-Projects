import React from 'react'
import { useState } from 'react'

const LikeButton = () => {
   let[buttonState, setButtonState] = useState(true);
   const changeButtonState = ()=>{
    setButtonState(!buttonState);
   }

   let likeStyle = {color :"red"};
  return (
    <>
      <h1>Like Button</h1>
      <div className="like">
        { buttonState ? (
                <i class="fa-regular fa-heart" style={likeStyle}></i> 
            ):(
                <i class="fa-solid fa-heart" style={likeStyle}></i>
            )
        }
      </div>
      <button onClick={changeButtonState}>Like Me!</button>
    </>
  )
}

export default LikeButton