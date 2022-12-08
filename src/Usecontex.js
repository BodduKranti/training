import { useState } from "react";
import { createContext } from "react";

export const contextApi = createContext();


const Usecontex = ({children}) => {
    const [name,setName]=useState('kranti')
  return (
    <>
        <contextApi.Provider value={{name,setName}}>
            {children}
        </contextApi.Provider>
    </>
  )
}

export default Usecontex


