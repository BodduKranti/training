import React from 'react'

const Productitms = (props) => {
  return (
      <>
          <div className='card h-100'>
              <div className='card-header'>
                <h3>{props.itms.prdName}</h3>
              </div>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div className='badge bg-primary'>{props.itms.prdCat}</div>
                  <div className='badge bg-danger'>{props.itms.prdBrand}</div>
                </div>
                <p>
                    {props.itms.prdDesc}
                </p>
                  
              </div>
              <div className='card-footer d-flex justify-content-between'>
                  <button className='btn btn-danger'>Add To Cart</button>
                  <button className='btn btn-primary'>Buy Now</button>
              </div>
          </div>
      </>
  )
}

export default Productitms
