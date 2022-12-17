import { useState, useEffect } from 'react';

const useGetdata = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setData(result.products)
            })
    }, [url])

    return data
}

const useProduct = (id) => {
    const [prdDtl, setPrdDtl] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((reslt) => {
                setPrdDtl(reslt)
            })
    }, [id])

    return prdDtl;
}

export  { useGetdata,  useProduct};