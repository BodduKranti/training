import React from 'react'
import {  Modal } from 'react-bootstrap'

const Deletitmmsg = (props) => {
  return (
    <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Do You Want to Delete this Itms</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='row'>
                        <div className='col-12 d-flex justify-content-between'>
                            <button className='btn btn-danger col-5' onClick={props.deleteProuduct}>Yes</button>
                            <button className='btn btn-success col-5' onClick={props.onHide}>No</button>
                        </div>
                    </div>
                    
                </Modal.Body>
            </Modal>
  )
}

export default Deletitmmsg
