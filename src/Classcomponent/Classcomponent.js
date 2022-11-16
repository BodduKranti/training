import React,{Component} from 'react';
import Propertycomponent from './Propertycomponent';

class Classcomponent extends Component{

    constructor(){
        super();

        this.state={
            color:'Red',
            name:'React Training',
            ename:''
        }
    }

    profile = [
        {
            user:'client1',
            userPhone:1234567890
        },
        {
            user:'client2',
            userPhone:1234567890
        },
        {
            user:'client3',
            userPhone:1234567890
        }
    ]

    properties = (data) => {
        alert('working')
        this.setState({reslts:data})
        console.log(data)
    }
    
    render(){
        return(
            <>

                <div className="Firstclass">Class</div>


                <h1>Class Component under folder {this.state.color}</h1>
                <h1>{this.state.name}</h1>

                {this.profile.map((itms,i)=>{
                    return(
                        <>
                        <p>
                            {itms.user} {itms.userPhone}
                        </p>
                             
                        </>
                    )
                })}


                <Propertycomponent
                
                />


                
            </>
        )
    }
}

export default Classcomponent;