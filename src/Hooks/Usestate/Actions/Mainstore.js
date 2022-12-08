import { useState } from 'react'
import Actions from './Actions'

const Mainstore = () => {
    //increament decrement
    const [count,setCount]=useState(0)

    //data 
    const [emp,setEmp]=useState({
        name:'',
        phone:''
    })

    //data store
    const [store,setStore]=useState([]);

    //error
    const [error,setError]=useState('')

  return (
    <>
        <Actions 
            count={count}
            setCount={setCount}

            emp={emp}
            setEmp={setEmp}

            store={store}
            setStore={setStore}

            error={error}
            setError={setError}
        />
    </>
  )
}

export default Mainstore
