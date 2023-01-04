import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Allservices } from './Contextapi'

const Contextprovider = (props) => {
  
    const [erMsg,setErMsg]=useState('')
    const [user,setUser]=useState('Loginusr');
    const [itms,setItms]=useState([])
    const [cartNum,setCartNum]=useState([]);

    const AddtoCart = (itms) => {
        setCartNum([...cartNum, itms]);
    }

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

   const fetchData = async () => {
        await axios.get('http://localhost:3000/product')
        .then((res)=>{
            setItms(res.data)
        })
        .catch((err)=>console.log(err))
   }

   const deleteItms = async (id) => {
        await axios.delete(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            fetchData();
        })
   }


   const [getItms, setGetItms] = useState({});

    const getItmsById = (id) => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                setGetItms(res.data)
            })
            .catch(error => console.log(error))
    }


   useEffect(()=>{
    fetchData();
   },[])
     
   
  return (
    <>
        <Allservices.Provider value={{
            user,
            fields,
            inputHandler,
            addProduct,
            Navigate,
            erMsg,
            itms,
            deleteItms,
            getItmsById,
            getItms,
            cartNum,
            AddtoCart
        }}>
            {props.children}
        </Allservices.Provider>
    </>
  )
}

export default Contextprovider