import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'

// 1. import useref hook
// 2. create useref hook
// 3. current element use with created useref hook Ex:(useref.current)

const Userrefn = () => {
    const [count, setCount] = useState('');
    const num = useRef(0)

    const inputFocus = useRef()

    const clickFocus = () => {
        inputFocus.current.focus();
    }

    useEffect(() => {
        num.current = num.current + 1
    })

    return (
        <>
            <div className='container mt-5'>
                <input type="text"
                    className='form-control'
                    value={count}
                    onChange={(e) => setCount(e.target.value)} />
                {count} {num.current}
            </div>

            <div className='container'>
                <div className='input-group'>
                    <input className='form-control' ref={inputFocus} />
                    <button className='btn btn-danger' onClick={clickFocus}>Focus</button>
                </div>
            </div>
        </>

    )
}

export default Userrefn
