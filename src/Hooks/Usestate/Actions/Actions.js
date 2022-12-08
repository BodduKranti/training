import React from 'react'
import Addform from '../Operation/Addform'
import Incremntdcr from '../Operation/Incremntdcr'
import Results from '../Results'

const Actions = ({
  count,
  setCount,
  emp,
  setEmp,
  store, setStore,error,setError }) => {

  const inCreament = () => {
    setCount(count + 1)
  }

  const deCremenmt = () => {
    setCount(count + 1)
  }

  const addForm = (e) => {
    e.preventDefault();
    if(emp.name==='' && emp.phone===''){
      setError('Please do not leave blank')
    }
    else{
      setStore([...store, emp]);
      setEmp({
        name: '',
        phone: ''
      })
      setError('')
    }
    
  }

  console.log(store)

  return (
    <>
      <Incremntdcr
        count={count}
        inCreament={inCreament}
        deCremenmt={deCremenmt}
      />

      <div className='row'>
        <div className='col-md-4'>
          <Addform
            emp={emp}
            setEmp={setEmp}
            addForm={addForm}
          />
        </div>
        
        <div className='col-md-8'>
          <Results
            store={store}
            error={error}
          />
        </div>

      </div>

    </>
  )
}

export default Actions
