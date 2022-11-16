import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(){
        super();

        this.state = {
            count:0
        }
    }

    render(){
        return(
            <>
                <h3>Output counter: {this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})} >Increament</button>
                <button onClick={()=>this.setState({count:Math.max(0,this.state.count-1)})} >Decreament</button>
                <button onClick={()=>this.setState({count:Math.floor(Math.random()*100+1)})}>Random Number</button>
            </>
        )
    }
}