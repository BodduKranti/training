import React from 'react'

const Result = ({storeData,deleteItm}) => {
    
  return (
    <>
        <div className='container'>
            <div className='row'>
                {storeData!=''?<>
                    <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {storeData && storeData.map((rslt, i)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{rslt.name}</td>
                                        <td>{rslt.phone}</td>
                                        <td>{rslt.email}</td>
                                        <td><button className='rounded-circle btn btn-danger' onClick={()=>deleteItm(i)}>X</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                    
                </table>
                </>:<>
                        <p className='text-center fw-bold fs-4'>There is no records here</p>
                </>}
                
            </div>
        </div>
        
    </>
  )
}

export default Result