import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Productitms from './Productitms';

const Productlist = () => {
    const [itms, setItms] = useState([]);

    const getPrdouct = async () => {
        await axios.get('http://localhost:3000/product')
            .then((res) => {
                setItms(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getPrdouct();
    }, [])


    console.log(itms);

    return (
        <>
            {itms.length > 0 ? <>
                {itms.map((itms) => {
                    return (
                        <>
                            <div className='col-md-6 mb-4'>
                                <Productitms
                                    itms={itms}
                                />
                            </div>

                        </>
                    )
                })}
            </> : <>
                <h3 className='text-danger p-3 border rounded text-center'> There are no products for now</h3>
            </>}


        </>
    )
}

export default Productlist
