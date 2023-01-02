import React from 'react'

const Prodcatlis = (props) => {
    return (
        <>
            
                {props.prdList === 'Category'?
                    <>
                        <li onClick={()=>props.getCatItms(props.cat, props.key )}>{props.cat}</li>
                    </>:
                    <>
                        <li>{props.brand}</li>
                    </>
                }
        </>
    )
}

export default Prodcatlis
