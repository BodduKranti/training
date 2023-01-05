import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import useCustomHook from '../Customservies/useCustomHook';
import { Allservices } from './Contextapi'

const Contextprovider = (props) => {
  
    const {user,
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
        deleteCartItm} = useCustomHook({
        prdName: '',
        prdCat: '',
        prdBrand: '',
        prdPrice: '',
        prdDesc: ''
    });
     
   
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
            AddtoCart,
            cartItmTotal,
            deleteCartItm
        }}>
            {props.children}
        </Allservices.Provider>
    </>
  )
}

export default Contextprovider