import React, { useState } from "react";


//useState points

//1. usestate import 
//2. usestate use under the top of the functional component
//3. this hook not the condional
//4. in this hook there are two variable

//5. instialal state
//6. update state

const Usestatehook = () => {

    const [state,setState]=useState('kranti');
    const [count,setCount]=useState(0);
    const [inputVal,setInputVal]=useState('training');

    const [inputAdd,setInputAdd]=useState('')
    const [storeData,setStoreData]=useState([])

    const [data,setData]=useState({
        name:'Harish',
        phone:123456789
    })

    const updateValue = () =>{
        setState('Kusuma')
    }

    const increament = () => {
        setCount(count + 1)
    }

    const decremtn = () =>{
        setCount(count-1)
    }

    const updateData = () => {
        setData({name:'Ram', phone:987654321})
    }

    const addData = () => {
        setStoreData([...storeData, inputAdd])
        // setInputAdd(e.target.value='')
    }

    return(
        <>
               <p>{state}</p> 

                <button className="btn btn-danger" onClick={updateValue}>Click Value Update</button>
                <h1>Increment</h1>
                <div className="row">
                    <div className="col-md-6">

                        {/* <button className="btn btn-primary" onClick={()=>setCount(count + 1))}>Increment</button> */}
                        
                        <button className="btn btn-primary" onClick={increament}>Increment</button>
                        <button className="btn btn-danger" onClick={decremtn}>Decrement</button>
                    </div>
                    <div className="col-md-6 d-flex fs-5 fw-bold align-items-center">{count}</div>
                     
                </div>

                <h4>Input Value</h4>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" className="form-control" onChange={(e)=>setInputVal(e.target.value)} />
                    </div>
                    <div className="col-md-5">
                        {inputVal}
                    </div>
                </div>

                <h4 className="mt-3">Data Value</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p>Name:{data.name}</p>
                        <p>Phone:{data.phone}</p>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-warning" onClick={updateData}>Update Data</button>
                    </div>
                </div>
                

                <div className="row">
                    <h4 className="col-12">Store Data</h4>
                    <div className="col-md-6">
                        <div className="d-flex">
                            <input className="form-control" onChange={(e)=>setInputAdd(e.target.value)} />
                            <button className="btn btn-danger" onClick={addData}>Add Data</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                            <h4>Recent Add Data</h4>
                        {storeData && storeData.map((data)=>{
                            return(
                                <>
                                   <p>{data}</p> 
                                </>
                            )
                        })}
                    </div>
                    
                </div>
        </>
    )

}

export default Usestatehook;