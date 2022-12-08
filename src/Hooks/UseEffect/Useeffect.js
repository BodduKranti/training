import React, { useState, useEffect } from 'react'

// useEffect data fetching, manually dom use, 
// useEffect marameter
// 1. function
// 2. dependency

const Useeffect = () => {
    const [count, setCount]=useState(0)
    const [store,setStore]=useState([]);

    useEffect(()=>{
       
        // setCount(count+1)

        // // setTimeout(()=>{
        // //     setCount(count+1)
        // // },1000)

        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((res)=>{
            setStore(res.products)
        })

    },[])

    console.log(store);
    
  return (
    <>  
        <div className='container'>
            <h1>UseEffect</h1>
            <p>Count : {count}</p>
        </div>
    </>
  )
}

export default Useeffect
