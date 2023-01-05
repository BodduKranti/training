import React from "react";
import { PureComponent } from "react";

export default class FuncPure extends PureComponent{
    constructor(){
        super();
        this.state={
            count:0
        }        
    }

    increment=()=>{
        this.setState({count:10})
    }

    render(){
        console.log(`count=${this.state.count}`);
        return(
            <>
                <buton className="btn btn-danger" onClick={this.increment}>Counter</buton>
            </>
        )
    }
}