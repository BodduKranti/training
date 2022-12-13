import React from 'react'
import { useContext } from 'react'
import { LoginUser } from '../../App'
import FunB from './FunB'

const FunA = ({user}) => { 
  const {student,emp}=useContext(LoginUser)
  return (
    <div>
        Fun A
        <p>Student Name:{student}</p>
        <p>Emp Name:{emp.name}</p>
        <FunB user={user} />
    </div>
  )
}

export default FunA
