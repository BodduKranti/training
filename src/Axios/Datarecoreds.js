import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddForm from './AddForm'
import Datalist from './Datalist'

// axios command for install [npm i axios]
// json-server install command [npm i json-server]
// 1. with the use of Axios get data from api 
// Ex: axios.get();
// 2. with the use of Axios post the Data
// Ex: axios.post();
// 3. with the use of Axios Delete the Data
// Ex: axios.delete();
// 4. with the use of Axios Update the Data 
// Ex : axios.put();

const Datarecoreds = () => {

    const [getData, setGetData] = useState([])

    const Results = async () => {
        await axios.get('http://localhost:3000/emp')
            .then((res) => {
                setGetData(res.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        Results();
    }, [])

    console.log(getData)

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3>Show Data</h3>
                            {getData.length > 0 ? <>
                                <div className='row'>
                                    <Datalist
                                        getData={getData}
                                        Results={Results}
                                    />
                                </div>

                            </> : <>
                                <h3 className='text-danger border p-3 rounded text-center'>There is no Records for Now</h3>
                            </>}

                        </div>
                        <div className="col-md-4">
                            <h3>Add form</h3>
                            <AddForm 
                                Results={Results}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Datarecoreds