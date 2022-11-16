import React from "react";

export default class Classchild extends React.Component{
    
    employee = [
        {
            empName:'emp1',
            empEmail:'test1@gmail.com',
            empSal:'1234567',
            empPhone:'1234567890'
        },
        {
            empName:'emp2',
            empEmail:'test2@gmail.com',
            empSal:'1234567',
            empPhone:'1234567890'
        },
        {
            empName:'emp3',
            empEmail:'test3@gmail.com',
            empSal:'1234567',
            empPhone:'1234567890'
        }
    ]

    render(){
        return(
            <>
            <h3>Main Data in Child</h3>
            <table>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Salry</th>
                            <th>Employee Phone</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.employee && this.employee.map((rslt)=>{
                                // const {empName,empSal ,empPhone,empEmail} = rslt
                                return(
                                    
                                    <>
                                        <tr>
                                            <td>{rslt.empName}</td>
                                            <td>{rslt.empSal}</td>
                                            <td>{rslt.empPhone}</td>
                                            <td>{rslt.empEmail}</td>
                                            <td><button onClick={()=>this.props.childFun(rslt)}>Click on the Child Component</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>

                </table>
                
            </>
        )
    }
}