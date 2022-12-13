import { useContext } from 'react';
import { useState, createContext } from 'react'
import NoteContext from './Createcontext';
import FunA from './FunA'

//Data passes by child with props is called prop drilling

//for avoiding this use usecontext hook
// 1. import createContext hook
// 2. use Provider newly created createContext also this context should be export
// 2. import usecontext hook also import created the createContext name





const MainParent = () => {
  const [user,setUser]=useState('kranti');
  const {subject,updateSub,emp} = useContext(NoteContext);

  return (
    <>
      <h1>
        {subject}
      </h1>
      <p>
        Employe Name : {emp.name}
      </p>
      <p>

        <button className='btn btn-danger' onClick={()=>updateSub()}>Update Data</button>
      </p>
        <FunA 
          user={user}
        />
    </>
  )
}

export default MainParent
