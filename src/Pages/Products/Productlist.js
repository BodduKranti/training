import React from 'react'
import Productitms from './Productitms';

const Productlist = ({itms}) => {
    

    return (
        <>
            {itms && itms.length > 0 ? <>
                {itms.map((itms) => {
                    return (
                        <>
                            <div className='col-md-4 mb-4'>
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
