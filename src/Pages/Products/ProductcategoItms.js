import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import Innerhero from '../../Component/Innerhero'
import { Allservices } from '../../Contextapi/Contextapi';
import Deletitmmsg from './Deletitmmsg';
import Productitms from './Productitms';
import Updateitms from './Updateitms';

const ProductcategoItms = () => {

    const {deleteProuduct} = useContext(Allservices)

    const [list, setList] = useState([]);
    const [getCatItm, setGetCatItm] = useState([])
    const [active, setActive] = useState('All')
    const [showPop,setShowPop]=useState(false);
    const [getId,setGetId]=useState(null)
    const [deleItmMsg,setDeleItmMsg]=useState(false)

    const [fields, setFields] = useState({
        prdName: '',
        prdCat: '',
        prdBrand: '',
        prdPrice: '',
        prdDesc: ''
    })

    const getResult = async () => {
        await axios.get('http://localhost:3000/product')
            .then((res) => {
                setList(res.data)
                setGetCatItm(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getResult();
    }, [])

    const getCat = [...new Set(getCatItm.map((cate) => {
        return cate.prdCat
    }))]

    const getCateProduct = (cate) => {
        setActive(cate)

        if (cate === 'All') {
            return setList(getCatItm);
        }

        setList(getCatItm.filter((itms) => {
            return itms.prdCat === cate;
        }))
    }

    const deleteItms = async (id) => {
        setDeleItmMsg(true)  
        setGetId(id)     
    }

    

    const getItmsById = async (id) => {
        alert(id)
        setGetId(id)
        await axios.get(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            setFields(res.data)
            setShowPop(true)
        })
        .catch(error=>console.log(error))
    }

    const updateItms = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/product/${getId}`, fields)
            .then((res) => {                
                getResult();
                setShowPop(false)
            })
    }

    const inputHandler = (e) => {
        setFields({...fields,[e.target.name]:e.target.value})
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
                                <li className={` ${active === 'All' ? 'bg-primary text-white' : ''} mt-2 p-1`} role="button" onClick={() => getCateProduct('All')}>All</li>
                                {getCat && getCat.map((cate) => {
                                    return (
                                        <>
                                            <li role="button" className={` ${active === cate ? 'bg-primary text-white' : ''} mt-2 p-1`} onClick={() => getCateProduct(cate)}>{cate}</li>
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
                                    return (
                                        <>
                                            <div className='col-md-4 mb-4'>
                                                <Productitms
                                                    itms={itms}
                                                    deleteItms={deleteProuduct}
                                                    getItmsById={getItmsById}
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

            <Updateitms 
                show={showPop}
                onHide={()=>setShowPop(false)}
                fields={fields}
                inputHandler={inputHandler}
                updateItms={updateItms}
                
            />

            <Deletitmmsg 
                show={deleItmMsg}
                onHide={()=>setDeleItmMsg(false)}
            />
        </>
    )
}

export default ProductcategoItms
