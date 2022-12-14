import { useState, useReducer } from 'react'
import Addtodo from './Addtodo';


const reducer = (state, action) => {
    // console.log(state,action)
    switch (action.type) {
        case 'addTodo':
            return [...state, action.emp];
        case 'toggleTodo':
            return state.map((itms,id)=>{
                if(action.index === id){
                    return {...itms,complete:!itms.complete}
                }
                else{
                   return itms
                }
            })
    }
    return state;
}

const Userrducertodo = () => {
    const [emp, setEmp] = useState({
        name: '',
        complete: false
    })
    const [store, dispatch] = useReducer(reducer, []);


    const inputHanlder = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value, complete: false })
    }

    const addTodo = () => {
        dispatch({ type: 'addTodo', emp })
    }

    console.log(store)

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-7 m-auto'>
                        <Addtodo
                            emp={emp}
                            inputHanlder={inputHanlder}
                            addTodo={addTodo}
                        />
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <ul className='list-unstyled mt-4'>
                                            {store && store.map((itms, index) => {
                                                return (
                                                    <>
                                                        <li 
                                                            className='p-2 border rounded mb-2'
                                                            style={{textDecoration:itms.complete?'line-through':''}}
                                                            onClick={() => dispatch({ type: 'toggleTodo', index })}
                                                        >{itms.name}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <pre>{JSON.stringify(store, null, 2)}</pre>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Userrducertodo