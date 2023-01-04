import React from 'react'
import { useContext } from 'react'
import Innerhero from '../Component/Innerhero'
import { Allservices } from '../Contextapi/Contextapi'
import Productitms from '../Pages/Products/Productitms'

const Datafetchfun = () => {

  const { itms, deleteItms } = useContext(Allservices)

  return (
    <>
      <Innerhero
        pageTitle="Data Fetch"
      />
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <div className='row'>
                {itms && itms.map((data) => {
                  return (
                    <>
                      <div className='col-md-4 mb-4'>
                        <Productitms
                          itms={data}
                          deleteItms={deleteItms}
                        />
                      </div>
                    </>


                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Datafetchfun