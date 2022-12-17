import React, { memo } from 'react'

const Todo = ({todo, addTodo}) => {
    console.log('Todo Add List Child');
  return (
    <>
    
        {todo && todo.map((itms,i)=>{
            return(
                <>
                    <p>{itms} {i}</p>
                </>
            )
        })}

        <button className='btn btn-danger' 
            onClick={addTodo}
        >Add Todo</button>
    
    </>
  )
}

export default memo(Todo)