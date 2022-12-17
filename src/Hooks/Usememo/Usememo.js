import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import Todo from '../Usecallback/Todo';

// useMemo syntax same as useEffect
//1. The react useMemo hook returns memozied value
//2. The useMemo Hook runs when one of its dependency update.

const Usememo = () => {
    const [count,setCount]=useState(0);
    const [todo,setTodo]=useState([])

    // const calculation = bigData(count);
    const calculation = useMemo(()=>{
        bigData(count)
    },[count])

    const addCount = () => {
        setCount(count +1)
    }

    const addTodo = () => {
        setTodo([...todo,'new task'])
    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p>Count {count}</p>
                    <button className='btn btn-danger' onClick={addCount}>Counter</button>
                </div>
                <div className='col-md-6'>
                    <Todo 
                        todo={todo}
                        addTodo={addTodo}
                    />
                </div>
            </div>
        </div>

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                        Calculation : {calculation}
                </div>
            </div>
        </div>
    </>
  )
}

const bigData = (num) => {

    for(let i=0;i<100000000; i++)
    {
        num = num + 1;
    }

    return num
}

export default Usememo