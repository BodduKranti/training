import React from 'react'
import { useState } from 'react';
import { useGetdata } from './Actions';
import Prdcat from './Prdcat';
import Productitm from './Productitm';
import Viewprodct from './Viewprodct';

const Maindata = () => {
    const data = useGetdata('https://dummyjson.com/products');
    const [viewId, setViewId] = useState(0);

    const Prdcatitm = [...new Set(data.map((itms) => itms.category))]

    const viewProduct = (id) => {
        setViewId(id)
    }



    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Prdcat
                            Prdcatitm={Prdcatitm}
                        />
                        <Viewprodct
                            viewId={viewId}
                        />
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            <Productitm
                                data={data}
                                viewProduct={viewProduct}
                            />
                        </div>

                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Maindata