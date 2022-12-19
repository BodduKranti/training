import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddForm = ({Results}) => {

    const [field, setField] = useState({
        empName: "",
        empPhone: "",
        empEmail: "",
        empState: "",
        empAdd: ""
    })

    const inputHandler = (e) => {
        setField({ ...field, [e.target.name]: e.target.value })
    }

    const addField = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/emp', field)
            .then((res) => {
                setField({
                    empName: "",
                    empPhone: "",
                    empEmail: "",
                    empState: "",
                    empAdd: ""
                })
                Results();
            })
    }


    return (
        <>
            <form className='form shadow p-3' onSubmit={addField}>
                <div className="form-group mb-3">
                    <input type="text"
                        name="empName"
                        value={field.empName}
                        className="form-control"
                        placeholder='Enter The Emaployee Name'
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="email"
                        className="form-control"
                        name="empEmail"
                        value={field.empEmail}
                        placeholder='Enter The Employee Email'
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control"
                        name="empPhone"
                        value={field.empPhone}
                        placeholder='Enter The Emaployee Phone'
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="text"
                        className="form-control"
                        name="empState"
                        value={field.empState}
                        placeholder='Enter The Employee State'
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group mb-3">
                    <textarea rows={3}
                        cols="4"
                        className="form-control"
                        name="empAdd"
                        value={field.empAdd}
                        placeholder='Enter The Employee Address'
                        onChange={inputHandler}
                    ></textarea>
                </div>
                <button className='btn btn-primary' type='submit'>Add Employee</button>
            </form>
        </>
    )
}

export default AddForm