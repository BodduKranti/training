import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Updateitms = (props) => {
    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className='form shadow p-3'>
                        <div className='form-group mb-4'>
                            <input type="text" className='form-control'

                                name="prdName"
                                value={props.fields.prdName}
                                placeholder="Enter Product Name"
                                onChange={props.inputHandler}
                            />
                        </div>
                        <div className='form-group mb-4'>
                            <input type="text" className='form-control'

                                name="prdCat"
                                value={props.fields.prdCat}
                                placeholder="Enter Product Category"
                                onChange={props.inputHandler}
                            />
                        </div>
                        <div className='form-group mb-4'>
                            <input type="text" className='form-control'

                                name="prdBrand"
                                value={props.fields.prdBrand}
                                placeholder="Enter Product Brand"
                                onChange={props.inputHandler}
                            />
                        </div>
                        <div className='form-group mb-4'>
                            <input type="text" className='form-control'

                                name="prdPrice"
                                value={props.fields.prdPrice}
                                placeholder="Enter Product Price"
                                onChange={props.inputHandler}
                            />
                        </div>
                        <div className='form-group mb-4'>
                            <textarea rows={4} cols={4}
                                className='form-control'
                                name="prdDesc"
                                value={props.fields.prdDesc}
                                placeholder="Enter Product Name"
                                onChange={props.inputHandler}
                            />
                        </div>
                        <div className='form-group mb-4'>
                            <button className='btn btn-danger' onClick={props.updateItms}>Update Product</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Updateitms
