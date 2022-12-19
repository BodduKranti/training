import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Dataitms from './Dataitms'
import Getfieldbyid from './Getfieldbyid'

const Datalist = ({getData,Results}) => {

    const [showPop,setShowPop]=useState(false)
    const [storeData,setStoreData]=useState({})

    const getField = async (id) =>{
        await axios.get(`http://localhost:3000/emp/${id}`)
        .then((res)=>{
            setStoreData(res.data)
            setShowPop(true)
        })
        .catch((error)=>console.log(error))
    }

    const delField = async (id) => {
        await axios.delete(`http://localhost:3000/emp/${id}`)
        .then((res)=>{
            Results();
        })
        .catch((error)=>console.log(error))
    }

  return (
    <>

        {getData && getData.map((itms)=>{
            return(
                <>
                        <div className='col-md-6 mb-4'>
                            <Dataitms 
                                itms={itms}
                                getField={getField}
                                delField={delField}
                            />
                        </div>
                </>
            )
        }).reverse()}

        <Getfieldbyid 
            show={showPop}
            onHide={()=>setShowPop(false)}
            storeData={storeData}
        />
    </>
  )
}

export default Datalist