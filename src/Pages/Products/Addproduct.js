import React from 'react'
import Innerhero from '../../Component/Innerhero'
import { useContext } from 'react'
import { Allservices } from '../../Contextapi/Contextapi'

const Addproduct = () => {  

    const {fields,erMsg,inputHandler,addProduct} = useContext(Allservices)

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
