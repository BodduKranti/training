import React,{Component} from "react";

export default class Child extends Component{

    constructor(){
        super();

        this.state={
            brand:'Motorola'
        }
    }

    childClient = [
        {
            name:'childclient1',
            phone:1234567890
        }
    ]


    render(){
        return(
            <>
                <h1>
                    Child color Name passing value 
                    from Parent : {this.props.color}
                </h1>

                {this.props.employeData.map((results)=>{
                    return(
                        <>  
                              <p>Emp Name: {results.name}</p>  
                        </>
                    )
                })}

                <button onClick={()=>this.props.childFun(this.childClient)}>Click on Child Component</button>

            </>
        )
    }
}