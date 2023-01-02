import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Innerhero from '../Component/Innerhero'
import Productlist from './Products/Productlist'

const Home = () => {
    const [itms, setItms] = useState([]);

    const getPrdouct = async () => {
        await axios.get('http://localhost:3000/product')
            .then((res) => {
                setItms(res.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getPrdouct();
    }, [])

    return (
        <>
            <Innerhero
                pageTitle="Home"
                pageContent="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            />

            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>
                        <Productlist itms={itms} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
