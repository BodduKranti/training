import React, { createContext, useState } from "react";
import Counter from "./Counter/Counter";
import Forminput from "./Form/Forminput";
import Classparent from "./Props/Classparent";
import Parent from "./Props/Parent";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';


import Classapi from "./Classapi/Classapi";
import Usestatehook from "./Hooks/Usestate/Usestatehook";
import Mainstore from "./Hooks/Usestate/Actions/Mainstore";
import Useeffect from "./Hooks/UseEffect/Useeffect";
import MainParent from "./Hooks/Usecontext/MainParent";
import AllProvidercontex from "./Hooks/Usecontext/AllProvidercontex";
import Userrefn from "./Hooks/Userref/Userrefn";

export const LoginUser = createContext();

const App = () => {
    const [student, setStudent] = useState('Ram')
    const [emp, setEmp] = useState({
        name: 'Kusuma',
        salary: '12345'
    })

    return (
        <>
        <AllProvidercontex>
            <LoginUser.Provider value={{student,emp}}>
                {/* <Classparent /> */}

                {/* <Counter /> */}
                {/* <h1>Hi This code is uploaded</h1> */}
                {/* <Mainstore /> */}
                {/* <Useeffect /> */}
                {/* <MainParent /> */}
                <Userrefn />
            </LoginUser.Provider>
            </AllProvidercontex>
        </>
    )
}

export default App;