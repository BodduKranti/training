import React from 'react'

const Dataitms = ({itms,getField,delField,Edit}) => {
    return (
        <>
            <div className="card ">
                <div className="card-header">
                    {itms.empName}
                </div>
                <div className="card-body">
                    <p>Emp Email:{itms.empEmail}</p>
                    <p>Emp Phone:{itms.empPhone}</p>
                    <div>
                        <p><strong>Address</strong></p>
                        <p>{itms.empAdd}</p>
                        <p>{itms.empState}</p>
                    </div>
                </div>
                <div className="cord-footer d-flex justify-content-between px-2 mb-4">
                    <button className="btn btn-danger" onClick={()=>Edit(itms.id)}>Eidt Field</button>
                    <button className="btn btn-primary" onClick={()=>getField(itms.id)}>Get Field</button>
                    <button className="btn btn-warning" onClick={()=>delField(itms.id)}>Delete Field</button>
                </div>
            </div>
        </>
    )
}

export default Dataitms