import React,{Component} from "react";
import Child from "./Child";

export default class Parent extends Component{
    constructor(){
        super();

        this.state ={
            color:'red'
        }

    }

    employe = [
        {
            name:'emp1'
        },
        {
            name:'emp2'
        },
        {
            name:'emp3'
        }
    ]

    showValue=(clr)=>{
        alert(clr);
    }

    client1 = [
        {
            name:'client1',
            phone:1234567890
        }
    ]

    client2 = [
        {
            name:'client2'
        }
    ]

    client =[
        {
            name:'client3'
        },
        ...this.client1,
        ...this.client2
    ]

    childFun = (data) => {
        this.setState({brand:data})
        console.log(this.state.brand)
    }

    render(){

        console.log(this.state.brand)

        return(
            <>

                <Child 
                    color={this.state.color}
                    employeData={this.employe}
                    childFun={this.childFun}
                />



                <button onClick={()=>this.showValue(this.state.color)} >Show Data</button>
            

                <h2>Show the result from Child to parent:</h2>
                
                {this.state.brand && this.state.brand.map((itms)=>{
                    return(
                        <>
                            {itms.name}
                            {itms.phone}
                        </>
                    )
                })}

            </>
        )
    }
}