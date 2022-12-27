import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Innerhero from '../../Component/Innerhero'
import {useNavigate} from 'react-router-dom'

const Addproduct = () => {

    const Navigate = useNavigate();
    const [erMsg,setErMsg]=useState('')

    const [fields, setFields] = useState({
        prdName: '',
        prdCat: '',
        prdBrand: '',
        prdPrice: '',
        prdDesc: ''
    })

    const inputHandler = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const addProduct = async (e) => {
        e.preventDefault();
        if( fields.prdName ==='' || 
            fields.prdCat ==='' || 
            fields.prdBrand ==='' || 
            fields.prdPrice ==='' ||
            fields.prdDesc ===''
        )
        {
            setErMsg('Please fill all the fields')
        }
        else{
            await axios.post(`http://localhost:3000/product`, fields)
            .then((res) => {
                setFields({
                    prdName: '',
                    prdCat: '',
                    prdBrand: '',
                    prdPrice: '',
                    prdDesc: ''
                })
                Navigate("/product")
            })
            .catch(error=>console.log(error))
        }     
    }

    return (
        <>
            <Innerhero
                pageTitle="Add Product"
                pageContent="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 m-auto'>
                            <p className='text-danger'>{erMsg && erMsg}</p>
                            <form className='form shadow p-3'>
                                <div className='form-group mb-4'>
                                    <input type="text" className='form-control'

                                        name="prdName"
                                        value={fields.prdName}
                                        placeholder="Enter Product Name"
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <input type="text" className='form-control'

                                        name="prdCat"
                                        value={fields.prdCat}
                                        placeholder="Enter Product Category"
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <input type="text" className='form-control'

                                        name="prdBrand"
                                        value={fields.prdBrand}
                                        placeholder="Enter Product Brand"
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <input type="text" className='form-control'

                                        name="prdPrice"
                                        value={fields.prdPrice}
                                        placeholder="Enter Product Price"
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <textarea rows={4} cols={4}
                                        className='form-control'
                                        name="prdDesc"
                                        value={fields.prdDesc}
                                        placeholder="Enter Product Name"
                                        onChange={inputHandler}
                                    />
                                </div>
                                <div className='form-group mb-4'>
                                    <button className='btn btn-danger' onClick={addProduct}>Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct
