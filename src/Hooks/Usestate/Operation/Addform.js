import React from 'react'

const Addform = ({emp,setEmp,addForm}) => {
    
  return (
    <>
        <form className='form mt-5' onSubmit={addForm}>
            <div className='form-group mb-3'>
                <input type="text" 
                name='name' 
                value={emp.name} 
                className="form-control" 
                placeholder='Enter the EMP Name'
                    onChange={(e)=>setEmp({...emp,[e.target.name]:e.target.value})}
                />
            </div>
            <div className='form-group mb-3'>
                <input type="text" 
                name='phone' 
                value={emp.phone} 
                className="form-control" 
                placeholder='Enter the EMP Phone'
                    onChange={(e)=>setEmp({...emp,[e.target.name]:e.target.value})}
                />
            </div>
            <button className='btn btn-danger' type='submit' >Add Form</button>
        </form>
    </>
  )
}

export default Addform
