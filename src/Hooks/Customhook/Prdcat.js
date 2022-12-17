import React from 'react'

const Prdcat = ({ Prdcatitm }) => {
    return (
        <>
            <h3>Category</h3>
            <ul className='list-unstyled'>
                {Prdcatitm && Prdcatitm.map((cat) => {
                    return (
                        <>
                            <li>{cat}</li>
                        </>
                    )

                })}
            </ul>
        </>
    )
}

export default Prdcat