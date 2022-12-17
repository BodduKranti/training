import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Todo from './Todo';

// useCallback

// useCallback syntax same as useEffect
// The React Usecallback Hook return a momozied callback fucntion
// The useCallBack Hook only runs when one of its dependencies is updated.

const Usecallback = () => {
    const [count, setCount] = useState(0);

    const [todo, setTodo] = useState([]);

    const incr = () => {
        setCount(count + 1)
    }

    // const addTodo = () => {
    //     setTodo([...todo, 'new task'])
    // }

    const addTodo = useCallback(()=>{
        setTodo([...todo, 'new task'])
    },[todo])

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p>Parent {count}</p>
                        <button className='btn btn-warning' onClick={incr}>Counter</button>
                    </div>
                    <div className='col-md-6'>
                        <p>Child</p>
                        <Todo
                            todo={todo}
                            addTodo={addTodo}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Usecallback