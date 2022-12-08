import React from 'react'
import { useState } from 'react'
import Action from './Action'
import Addform from './Addform'

const Usestates = () => {

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        id: ''
    })

    const [storeData, setStoreData] = useState([])

    const AddData = () => {
        setStoreData([...storeData, user])
        setUser({
            name: '',
            phone: '',
            email: ''
        })
    }

    console.log(storeData)

    return (
        <>
            <div className='container'>
                Usestates
                <p>Name: {user.name}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Addform
                            user={user}
                            setUser={setUser}
                            AddData={AddData}
                        />
                    </div>
                    <div className='col-md-6'>
                        <Action
                            storeData={storeData}
                            setStoreData={setStoreData}
                        />
                    </div>
                </div>
            </div>



            {/* {storeData && storeData.map((itm)=>{
                return(
                    <>
                       <p>{itm.user.name}</p> 
                    </>
                )
            })} */}
        </>

    )
}

export default Usestates