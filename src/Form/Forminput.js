import React from "react";

export default class Forminput extends React.Component{
    constructor(){
        super();

        this.state={
            color:'',
            emp:{
                empName:'',
                empPhone:'',
                empEmail:'',
                empAdd:''
            },
            storData:[]
        }
    }

    inputHandler = (e) => {
        this.setState({color:e.target.value})
    }

    inputEmp = (e) => {
        this.setState({
            emp:{...this.state.emp,[e.target.name]:e.target.value}
        })
    }

    add = (e) => {
        e.preventDefault();

        this.setState({storData:[...this.state.storData, this.state.emp]})
    
        console.log(this.state.storData)
    }

    render(){
        // console.log(this.state.emp)
        return(
            <><h3>Normal value</h3>
               <p>
               
                    <input type="text" name="color" value={this.state.color} onChange={this.inputHandler} />
                    {this.state.color}
                </p> 
                <p>
                    <h3>Object value</h3>
                    
                    
                    <form>
                    <input type="text" name="empName" value={this.state.emp.empName} onChange={this.inputEmp} placeholder="enter the empName" /><br/>
                    <input type="tel" name="empPhone" value={this.state.emp.empPhone} onChange={this.inputEmp} placeholder="enter the empPhone" /><br/>
                    <input type="email" name="empEmail" value={this.state.emp.empEmail} onChange={this.inputEmp} placeholder="enter the empEmail" /><br/>
                    <input type="text" name="empAdd" value={this.state.emp.empAdd} onChange={this.inputEmp} placeholder="enter the empAdd" />
                    <br/><button type="submit" onClick={this.add}>Add Data</button>
                    </form>
                    
                    <br/>
                    
                </p>
                

                <table>
                    <thead>
                        <tr>
                            <th>empName</th>
                            <th>empPhone</th>
                            <th>empEmail</th>
                            <th>empAdd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.storData && this.state.storData.map((results)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{results.empName}</td>
                                        <td>{results.empPhone}</td>
                                        <td>{results.empEmail}</td>
                                        <td>{results.empAdd}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>

                 
            </>
        )
    }
}