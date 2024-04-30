import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const count = useSelector(state=> state.counter)
  return (
    <>
     <h1>{count}</h1>
    </>
  )
}

export default Home