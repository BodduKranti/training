import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const useCustomHook = (initial={}) => {
    const [erMsg,setErMsg]=useState('')
    const [user,setUser]=useState('Ram');
    const [itms,setItms]=useState([])
    const [cartNum,setCartNum]=useState([]);

    const AddtoCart = (itms) => {
        setCartNum([...cartNum, itms]);
    }

    const [fields, setFields] = useState(initial)

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


    //cart total funtionality
    const cartItmTotal = cartNum.reduce((prev,cur)=> prev + Number(cur.prdPrice), 0);

    //cart itms deleted functionality
    const deleteCartItm = (id) => {
        const items = cartNum.filter((itms,idx)=>idx!==id)
        setCartNum(items)
    }

    console.log(cartItmTotal)

   useEffect(()=>{
    fetchData();
   },[])

  return {user,
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
    AddtoCart,
    cartItmTotal,
    deleteCartItm}
}

export default useCustomHook