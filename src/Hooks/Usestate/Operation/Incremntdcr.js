import React from 'react'

const Incremntdcr = (props) => {

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 m-auto'>
                    <div className='input-group'>
                        <button className='btn btn-danger' onClick={props.inCreament}>+</button>
                        <input type="text" value={props.count} className="form-control"  disabled/>
                        <button className='btn btn-danger' onClick={props.deCremenmt}>-</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Incremntdcr
