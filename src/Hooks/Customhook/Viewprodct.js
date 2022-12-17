import React from 'react'
import { useProduct } from './Actions';

const Viewprodct = ({viewId}) => {
    const prdDtl = useProduct(viewId);

  return (
    <>
            <div className='row'>
                    <div className='col-md-12'>
                        <figure>
                            <img src={prdDtl.thumbnail} className="img-fluid" alt='' />
                        </figure>
                    </div>
                    <div className='col-12'>
                        <h1>{prdDtl.title}</h1>
                        <h4>{prdDtl.category}</h4>
                        <div className='fs-5 fw-bold'>
                            {prdDtl.price}
                        </div>

                    </div>
                </div>
    </>
  )
}

export default Viewprodct