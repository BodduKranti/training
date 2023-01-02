import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Innerhero from '../../Component/Innerhero'
import Productitms from './Productitms';

const ProductcategoItms = () => {

    const [list, setList] = useState([]);
    const [getCatItm,setGetCatItm]=useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then((res) => {
                setList(res.data)
                setGetCatItm(res.data)
            })
            .catch(error => console.log(error))


    }, [])

    const getCat = [...new Set(getCatItm.map((cate)=>{
       return cate.prdCat
    }))]

    const getCateProduct = (cate) => {

        if(cate==='All'){
            return  setList(getCatItm);
        }
       
        setList(getCatItm.filter((itms)=>{
            return itms.prdCat === cate;
        }))

    }


    return (
        <>
            <Innerhero

                pageTitle="Product Category Items"
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <h3>Category</h3>
                            <ul className='list-unstyled'>
                                <li onClick={()=>getCateProduct('All')}>All</li>
                                {getCat && getCat.map((cate)=>{
                                    return(
                                        <>
                                            <li className='mt-2' onClick={()=>getCateProduct(cate)}>{cate}</li>
                                        </>
                                    )
                                })}
                            </ul>
                            <h3>Brand</h3>
                        </div>
                        <div className="col-md-9">
                            <h3>Product List</h3>
                            <div className='row'>
                                {list && list.map((itms) => {
                                    return(
                                        <>
                                            <div className='col-md-4 mb-4'>
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
                </div>
            </div>
        </>
    )
}

export default ProductcategoItms
