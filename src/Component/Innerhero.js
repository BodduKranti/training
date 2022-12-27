import React from 'react'

const Innerhero = ({pageTitle, pageContent}) => {
  return (
    <>
        <div className='container-fluid py-5 bg-primary text-white'>
            <div className='container'>
                <h1>{pageTitle}</h1>
                <p>{pageContent}</p>
            </div>
        </div>
    </>
  )
}

export default Innerhero
