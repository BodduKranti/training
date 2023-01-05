import React from 'react'
import { useState } from 'react'

const Purecomponent = () => {
    const [count,setCount]=useState(10);

    const inCrement = () => {
        // alert(count)
        setCount(10)
    }

    console.log(`count=${count}`);
  return (
    <>
        <button className='btn btn-danger' onClick={inCrement}>Counter</button>
    </>
  )
}

export default Purecomponent