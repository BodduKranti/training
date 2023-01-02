import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Innerhero from '../../Component/Innerhero';
import Productitms from './Productitms';

const ProductcatItms = () => {
    const {name} = useParams();

    const [getItms,setGetItms] = useState([]);
    
    const getCatItms = getItms.filter((itms)=>itms.prdCat === name);

    console.log(getCatItms)

    useEffect(() => {
        axios.get(`http://localhost:3000/product/`)
            .then((res) => {
                setGetItms(res.data)
            })
            .catch(error => console.log(error))
    }, [name])

  return (
    <>
        <Innerhero 
            pageTitle={name}
        />
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className='row'>
                    {getCatItms.map((itms)=>{
                        return(
                            <>
                                <div className='col-md-3'>
                                    <Productitms 
                                        itms={itms}
                                    />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductcatItms
