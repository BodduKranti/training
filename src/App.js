import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

// npm i react-router-dom 

// import react router dom

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Pagenotfound from "./Pages/Pagenotfound";
import Addproduct from "./Pages/Products/Addproduct";
import Productsingle from "./Pages/Products/Productsingle";
import Productcat from "./Pages/Products/Productcat";
import ProductcatItms from "./Pages/Products/ProductcatItms";
import ProductcategoItms from "./Pages/Products/ProductcategoItms";

const App = () => {

    
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/products/:id" element={<Productsingle />} />
                    <Route path="/prodcat" element={<Productcat />} />
                    <Route path="/prodcat/:name" element={<ProductcatItms />} />
                    <Route path="/productadd" element={<Addproduct />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/productCateItms" element={<ProductcategoItms />} />
                    {/* <Route path="/*" element={<Pagenotfound />} /> */}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </BrowserRouter>            
        </>
    )
}

export default App;