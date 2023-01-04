import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Innerhero from '../../Component/Innerhero'
import { Allservices } from '../../Contextapi/Contextapi'

const Viewcart = () => {
    const { cartNum } = useContext(Allservices);

    return (
        <>
            <Innerhero
                pageTitle="View Cart"
            />
            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {cartNum.length > 0 ? <>
                                <table className='table table-strip table-responsive'>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Product Category</th>
                                            <th>Product Brand</th>
                                            <th>Product Desc</th>
                                            <th>Product Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartNum.map((itms) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{itms.prdName}</td>
                                                        <td>{itms.prdCat}</td>
                                                        <td>{itms.prdBrand}</td>
                                                        <td>{itms.prdDesc}</td>
                                                        <td>{itms.prdPrice}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </> : <>
                                <Link className='btn btn-primary' to="/product">Retrun to Shop</Link>
                            </>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewcart
