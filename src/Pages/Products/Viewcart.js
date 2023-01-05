import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Innerhero from '../../Component/Innerhero'
import { Allservices } from '../../Contextapi/Contextapi'

const Viewcart = () => {
    const { cartNum,cartItmTotal,deleteCartItm } = useContext(Allservices);
console.log(cartItmTotal)
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
                                            <th>Product Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartNum.map((itms, i) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{itms.prdName}</td>
                                                        <td>{itms.prdCat}</td>
                                                        <td>{itms.prdBrand}</td>
                                                        <td>{itms.prdPrice}</td>
                                                        <td><button onClick={()=>deleteCartItm(i)} className='btn btn-danger rounded-circle'>X</button></td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                        <tr>
                                            <td><strong>Total</strong></td>
                                            <td></td>
                                            <td></td>
                                            <td>{cartItmTotal}</td>
                                            <td></td>
                                        </tr>

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
