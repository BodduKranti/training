import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Getfieldbyid = (props) => {
    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Name : {props.storeData.empName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Employee Email :  {props.storeData.empEmail}</p>
                    <p>Employee Phone :  {props.storeData.empPhone}</p>
                    <p>Employee Address :  {props.storeData.empAdd}</p>
                
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

export default Getfieldbyid