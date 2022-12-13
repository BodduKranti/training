import React from 'react'
import { useContext } from 'react'
import { LoginUser } from '../../App';

const FunC = ({user}) => {
  const {student} = useContext(LoginUser);

  return (
    <div>
        Fun C {user}
        <p>Student Name : {student}</p>
    </div>
  )
}

export default FunC
