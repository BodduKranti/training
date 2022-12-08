import React from 'react'

const Addform = ({ user, setUser, AddData }) => {


    // const inputHandler = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // }

    return (
        <>

            <div>Addform </div>
            <div className='form-group mb-4'>
                <input type="text"
                    name='name'
                    value={user.name}
                    className='form-control'
                    onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })}
                    placeholder="Enter the Name"
                />
            </div>
            <div className='form-group mb-4'>
                <input type="text"
                    name='phone'
                    value={user.phone}
                    className='form-control'
                    onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })}
                    placeholder="Enter the Phone"
                />
            </div>
            <div className='form-group mb-4'>
                <input type="email"
                    name='email'
                    value={user.email}
                    className='form-control'
                    onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })}
                    placeholder="Enter the Phone"
                />
            </div>
            
            <div className='form-group mb-4'>
                <button className='btn btn-danger' onClick={AddData}>Add Data</button>
            </div>

        </>
    )
}

export default Addform