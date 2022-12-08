import React from "react";
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


const App = () => {
    return(
        <>
            {/* <Classparent /> */}

            {/* <Counter /> */}
            {/* <h1>Hi This code is uploaded</h1> */}
            {/* <Mainstore /> */}
            <Useeffect />
        </>
    )
}

export default App;