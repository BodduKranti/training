import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Innerhero from '../Component/Innerhero'
import Prodcatlis from './Products/Prodcatlis'
import ProductcatItms from './Products/ProductcatItms'
import Productlist from './Products/Productlist'

const Product = () => {

    const [itms, setItms] = useState([]);
    const [filterItms, setFilterItms] = useState([]);
    const [idItm, setIdItm] = useState(null);

    const getPrdouct = async () => {
        await axios.get('http://localhost:3000/product')
            .then((res) => {
                setItms(res.data)
                setFilterItms(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getPrdouct();
    }, [])

    const getCat = ['All', ...new Set(filterItms.map((cat) => cat.prdCat))]
    const getBrand = ['All', ...new Set(filterItms.map((brand) => brand.prdBrand))]


    const getCatItms = (cat, id) => {

        setIdItm(id);

        if (cat === 'All') {
            return setItms(filterItms);
        }
        setItms(filterItms.filter((ctItms) => ctItms.prdCat === cat))
    }


    return (
        <>
            <Innerhero
                pageTitle="Product"
                pageContent="Lorem Ipsum"
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-3">
                            <h4>Category</h4>


                            <ul className='list-unstyled'>
                                {getCat && getCat.map((cat, i) => {
                                    return (
                                        <>
                                            <Prodcatlis
                                                cat={cat}
                                                prdList='Category'
                                                getCatItms={getCatItms}
                                                key={i}
                                                idItm={idItm}
                                            />
                                        </>
                                    )
                                })}</ul>

                            <h4>Brand</h4>

                            {getBrand.map((brand) => {
                                return (
                                    <>
                                        <Prodcatlis
                                            brand={brand}
                                            prdList='Brand'
                                        />
                                    </>
                                )
                            })}
                        </div>
                        <div className="col-md-9">
                            <div className='row'>
                                <Productlist
                                    itms={itms}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
