import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const UpdateForm = ({getItms, updateEmp, inputHandler}) => {
    
    return (
        <>
            <form className='form' onSubmit={updateEmp}>
                <div className='form-group mb-4'>
                    <input type="text" className="form-control" name="empName" value={getItms.empName} onChange={inputHandler} />
                </div>
                <div className='form-group mb-4'>
                    <input type="text" className="form-control" name="empPhone" value={getItms.empPhone} onChange={inputHandler} />
                </div>
                <div className='form-group mb-4'>
                    <input type="email" className="form-control" name="empEmail" value={getItms.empEmail} onChange={inputHandler} />
                </div>
                <div className='form-group mb-4'>
                    <input type="text" className="form-control" name="empState" value={getItms.empState} onChange={inputHandler} />
                </div>
                <div className='form-group mb-4'>
                    <textarea rows={4} cols={4} className="form-control" name="empAdd" value={getItms.empAdd} onChange={inputHandler}></textarea>
                </div>
                <div className='form-group mb-4'>
                    <button className='btn btn-danger' type='submit'>Update Employee</button>
                </div>
            </form>
        </>
    )
}

export default UpdateForm
