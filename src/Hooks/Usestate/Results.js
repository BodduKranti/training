import React from 'react'

const Results = ({store,error}) => {
  return (
    <>
            <h3>Results</h3>
            <div className='row'>
                <div className='col-12 px-4'>
                    <p>{error}</p>
                    {store!=''?<>
                    <table className='table table-responsive'>
                        <thead>
                            <tr>
                                
                                <th>Sr.N</th>
                                <th>Name</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store && store.map((itms,i)=>{
                                return(
                                    <>
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{itms.name}</td>
                                            <td>{itms.phone}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                    </>:
                        <>
                            <h4>
                                No Records for now
                            </h4>
                        </>
                    }
                    
                </div>
            </div>
    </>
  )
}

export default Results