import React from 'react'
import Innerhero from '../Component/Innerhero'
import Productlist from './Products/Productlist'

const Product = () => {




    return (
        <>
            <Innerhero
                pageTitle="Product"
                pageContent="Lorem Ipsum"
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className='row'>
                                <Productlist />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
