


import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

import nounsuccess from "../../../../src/assets/noun-success.png";
const PaymentSuccess = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className='submit_popup'>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center" style={{ paddingTop: "10px" }}>

                <img src={nounsuccess} alt="" />
                <h4>Payment successful</h4>
                <p style={{ padding: "10px" }}>
                    Congratulations! Enjoy the creative freedom while avoiding the copyright violation.
                </p>
                <InputGroup className="mb-3 pb-10">
                    <Form.Control
                        placeholder="Integer auctor cum urna malesuada."
                        aria-label="Payment Link"
                        aria-describedby="basic-addon2"
                    />

                    <Button variant="outline-secondary" style={{ background: "black", color: "white" }}>Copy Link</Button>



                </InputGroup>
            </Modal.Body>
        </Modal>
    );
};
export default PaymentSuccess;