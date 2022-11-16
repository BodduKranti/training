import React from "react";
import Classchild from "./Classchild";

export default class Classparent extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    empData = (empRslt) => {
        this.setState({ empData: empRslt })
        console.log(empRslt)
    }

    render() {
        return (
            <>

                <Classchild
                    childFun={this.empData}
                />

                {this.state.empData ? <>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Salry</th>
                                <th>Employee Phone</th>
                                <th>Employee Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{this.state.empData.empName}</td>
                                <td>{this.state.empData.empSal}</td>
                                <td>{this.state.empData.empPhone}</td>
                                <td>{this.state.empData.empEmail}</td>
                            </tr>
                        </tbody>

                    </table>
                </> :
                    <>
                        <h3>Parent Child There is no record</h3>
                    </>}



            </>
        )
    }
}