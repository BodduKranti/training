import React, { useReducer, useState } from 'react'


//userreducer take two paramenter 
// ex : useReducer(<reducer>,<intialState>)
// import useReducer
// const [state,dispatch]
// create reducer function at the top of the arrow component function

const intialState = 0;

const reducer = (state, action) => {

    switch (action.type) {
        case 'incr':
            return {...state, count:state.count + 1};
        case 'decr':
            return {...state, count:state.count - 1};
        case 'store':
            return {...state, store:[...state.store, action.inputVal ]}
        default:
            return state
    }
}

const Userreducer = () => {
    // const [count,setCount]=useState(0)

    // const incr = () => {
    //     setCount(count+1)
    // }

    const [inputVal,setInputVal] = useState({
        name:'',
        salary:''
    })

    const [{count, store}, dispatch] = useReducer(reducer, {
        count:intialState,
        store:[]
    })

    // state value use for change the value as per operation
    // dispatch difine whitch type of action to be perform
    // reducer used for functionality
    // instialstate to be difine the value
    // reducer function also take two arguments [state, action]

    // const incr = () => {
    //     dispatch({type:'incr'});
    // }

    const inputHandler = (e) => {
        setInputVal({...inputVal,[e.target.name]:e.target.value})
    }

    const addField = (e) =>{
        e.preventDefault();
        dispatch({type:'store', inputVal})
    }

    return (
        <>
            <p>Userreducer {count}</p>
            <button className='btn btn-danger me-2' onClick={() => dispatch({ type: 'incr' })}>Increment</button>
            <button className='btn btn-warning' onClick={() => dispatch({ type: 'decr' })}>Descrement</button>

            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <form className='form' onSubmit={addField}>
                            <div className='form-group mb-3'>
                                <input type="text" name="name" 
                                    className='form-control' 
                                    value={inputVal.name}
                                    onChange={inputHandler}
                                    placeholder="Enter the Employee Name"
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <input type="text" name="salary" 
                                    className='form-control' 
                                    value={inputVal.salary}
                                    onChange={inputHandler}
                                    placeholder="Enter the Employee Salary"
                                />
                            </div>
                            <button className='btn btn-primary' type='submit'>Add Field</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                            {store && store.map((itms)=>{
                                return(
                                    <>
                                        <div className='row'>
                                            <div className='col-6'>{itms.name}</div>
                                            <div className='col-6'>{itms.salary}</div>
                                        </div>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Userreducer