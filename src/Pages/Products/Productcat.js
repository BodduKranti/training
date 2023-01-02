import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Innerhero from '../../Component/Innerhero'

const Productcat = () => {
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

    const getCat = [...new Set(itms.map((cat)=>cat.prdCat))]

    console.log(getCat)

  return (
    <>
      <Innerhero
        pageTitle="Product Category"
        pageContent="Lorem Ipsum"
      />
      <div className='container-fluid py-5'>
          <div className='container'>
              <div className='row'>
                  <div className="col-12">
                      <ul className='list-unstyled row'>
                          {getCat.map((cats)=>{
                            return(
                              <>
                                <li className='col-md-3'>
                                    <Link to={`${cats}`} className="btn btn-danger">{cats}</Link>
                                </li>
                              </>
                            )
                          })}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Productcat
