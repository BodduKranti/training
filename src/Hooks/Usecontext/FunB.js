import React from 'react'
import { useContext } from 'react'
import { LoginUser } from '../../App';
import FunC from './FunC'

const FunB = ({user}) => {
  const {emp} = useContext(LoginUser);

  return (
    <div>
        Fun B {emp.name} {emp.salary}
        <FunC user={user} />
    </div>
  )
}

export default FunB
