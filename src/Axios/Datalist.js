import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Dataitms from './Dataitms'
import Getfieldbyid from './Getfieldbyid'
import UpdateForm from './UpdateForm'

const Datalist = ({ getData, Results }) => {

    const [showPop, setShowPop] = useState(false)
    const [storeData, setStoreData] = useState({})
    const [getId,setGetId]=useState(null)
    const [showMsg,setShowMsg]=useState('');

    const [getItms, setGetItms] = useState({
        empName: "",
        empPhone: "",
        empEmail: "",
        empState: "",
        empAdd: ""
    })

    const inputHandler = (e) => {
        setGetItms({ ...getItms, [e.target.name]: e.target.value })
    }

    const getField = async (id) => {
        await axios.get(`http://localhost:3000/emp/${id}`)
            .then((res) => {
                setStoreData(res.data)
                setShowPop(true)
            })
            .catch((error) => console.log(error))
    }

    const delField = async (id) => {
        await axios.delete(`http://localhost:3000/emp/${id}`)
            .then((res) => {
                Results();
            })
            .catch((error) => console.log(error))
    }


    const Edit = async (id) => {
        setGetId(id);
        await axios.get(`http://localhost:3000/emp/${id}`)
            .then((res) => {
                setGetItms(res.data)
            })
            .catch((error) => console.log(error))
    }

    const updateEmp = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/emp/${getId}`, getItms)
        .then((res)=>{
            Results();
            setShowMsg('Updated Successfully')
            setTimeout(()=>{
                setShowMsg('')
            },1000)
        })
        .catch(error=>console.log(error))
    }

    return (
        <>

            {getData && getData.map((itms) => {
                return (
                    <>
                        <div className='col-md-6 mb-4'>
                            <Dataitms
                                itms={itms}
                                getField={getField}
                                delField={delField}
                                Edit={Edit}
                            />
                        </div>
                    </>
                )
            }).reverse()}

            <Getfieldbyid
                show={showPop}
                onHide={() => setShowPop(false)}
                storeData={storeData}
            />

            <p>{showMsg && showMsg}</p>

            <UpdateForm
                getItms={getItms}
                inputHandler={inputHandler}
                updateEmp={updateEmp}
            />

        </>
    )
}

export default Datalist