import React from 'react'

const Productitm = ({data,viewProduct}) => {
  return (
    <>
        {data && data.map((itms)=>{
            return(
                <>
                <div className='col-md-4 mb-4'>
                <div className='card h-100'>
                        <div className='card-header'>
                            <h3>{itms.title}</h3>
                        </div>
                        <div className='card-body'>
                            <div className='badge bg-primary'>{itms.category}</div>
                            <p>
                                {itms.description}
                            </p>
                        </div>
                        <div className='card-footer d-flex justify-content-between'>
                            <button className='btn btn-warning'>Add To Cart</button>
                            <button className='btn btn-primary' onClick={()=>viewProduct(itms.id)}>View Product</button>
                        </div>
                    </div>
                </div>
                    
                </>
            )
        })}
    </>
  )
}

export default Productitm