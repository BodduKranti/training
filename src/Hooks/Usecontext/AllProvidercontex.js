import React, { useState } from 'react'
import NoteContext from './Createcontext'

const AllProvidercontex = (props) => {
    const [subject,setSubject]=useState('React Training')
    const [emp,setEmp]=useState({
        name:'Ram',
        salary:120000
    })
    const updateSub = () => {
        setSubject('Must Practice React Subject')
    }

  return (
    <NoteContext.Provider value={{
        subject, 
        emp,
        updateSub
    }}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default AllProvidercontex
