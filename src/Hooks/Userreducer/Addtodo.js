import React from 'react'

const Addtodo = ({ emp, inputHanlder, addTodo }) => {
    return (
        <>
            <div className='input-group'>
                <input type="text"
                    name="name"
                    className='form-control'
                    value={emp.name}
                    onChange={inputHanlder}
                    placeholder="Enter the Todo Name"
                />
                <button
                    className='btn btn-primary'
                    onClick={addTodo}
                >
                    Add Todo
                </button>
            </div>
        </>
    )
}

export default Addtodo