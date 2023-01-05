import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Innerhero from '../../Component/Innerhero';
import { Allservices } from '../../Contextapi/Contextapi';

const Productsingle = () => {

    const { id } = useParams();
    const {getItmsById, getItms,AddtoCart} = useContext(Allservices);

    useEffect(() => {
        getItmsById(id);
    }, [id])

    console.log(id)

    return (
        <>
            <Innerhero 
                pageTitle={getItms.prdName}
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='fs-3'>Category : {getItms.prdCat}</p>
                            <p className='fs-4'>Brand : {getItms.prdBrand}</p>
                            <p className='fs-4 fw-bold'>Price: {getItms.prdPrice}</p>
                            <p>
                                <strong>Description:</strong>
                                {getItms.prdDesc}
                            </p>
                            <div className='row'>
                                <div className='col-md-6 d-flex justify-content-between'>
                                    <button className='btn btn-danger' onClick={()=>AddtoCart(getItms)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productsingle
