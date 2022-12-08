import React from 'react'
import { useState } from 'react'
import Result from './Result'

const Action = ({storeData, setStoreData}) => {
    const [message,setMessage]=useState('')

    const deleteItm = (del) => {
        setStoreData(storeData.filter((itms,i)=>i!==del))
        setMessage('Delete Successfully')
        setTimeout(() => {
            setMessage('')
        }, 1000);
    }
     
  return (
    <>
    <div className='col-12'>
    {message && message}
    </div>
    
        <Result 
            storeData={storeData}
            setStoreData={setStoreData}
            deleteItm={deleteItm}
        />
    </>
    
  )
}

export default Action