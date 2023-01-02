import React from 'react'

import {NavLink } from "react-router-dom";

const Productitms = (props) => {
    return (
        <>
            <div className='card h-100 shadow'>
                <div className='card-header'>
                    <h5>{props.itms.prdName}</h5>
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

                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-danger fs-6'><small>Add To Cart</small></button>
                    <NavLink className='btn btn-primary fs-6' to={`/products/${props.itms.id}`}><small>Buy Now</small></NavLink>
                </div>
            </div>
        </>
    )
}
export default Productitms
