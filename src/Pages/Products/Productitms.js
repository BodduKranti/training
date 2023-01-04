import React from 'react'
import { useContext } from 'react';

import {NavLink } from "react-router-dom";
import { Allservices } from '../../Contextapi/Contextapi';

const Productitms = (props) => {


    const {AddtoCart} = useContext(Allservices)

    return (
        <>
            <div className='card h-100 shadow'>
                <div className='card-header position-relative'>
                    <h5>{props.itms.prdName}</h5>
                    <div className='close position-absolute' onClick={()=>props.deleteItms(props.itms.id)}>X</div>
                </div>
                <div className='card-body'>
                    <div className='d-flex justify-content-between mb-4'>
                        <div className='badge bg-primary'>{props.itms.prdCat}</div>
                        <div className='badge bg-danger'>{props.itms.prdBrand}</div>
                    </div>
                    <p>
                        {props.itms.prdDesc}
                    </p>

                    <div className='d-flex justify-content-between'>
                        <p>Price:</p>
                        <p className='fs-5 fw-bold'>${props.itms.prdPrice}</p>
                    </div>
                    <button className='btn btn-danger fs-6' onClick={()=>props.getItmsById(props.itms.id)}><small>Edit Items</small></button>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-danger fs-6' onClick={()=>AddtoCart(props.itms)}><small>Add To Cart</small></button>
                    <NavLink className='btn btn-primary fs-6' to={`/products/${props.itms.id}`}><small>Buy Now</small></NavLink>
                </div>
            </div>
        </>
    )
}
export default Productitms
