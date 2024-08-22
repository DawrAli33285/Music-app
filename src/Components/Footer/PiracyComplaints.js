import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import "./piracyomplaints.css";
const PiracyComplaints = () => {
    return (
        <Form className='piracy_setting'>
            <div className='piracy_Div'>
                {/* <img src={piracyImg} alt='piracyImg' /> */}
                <div className='piracy_content'>
                    <h5>PIRACY COMPLAINTS</h5>
                   
                </div>
            </div>


            
            <Row>
               
                <Col md={12}>
                    <Form.Group controlId="typeSelect">
                        <Form.Label className="statement_form">Selct Type</Form.Label>
                        <Form.Control as="select" name="typeSelect">
                            <option value="">Select type</option>
                            <option value="type1">music</option>
                            <option value="type2">content</option>
                           

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={12}>
                    <Form.Group controlId="typeSelect">
                        <Form.Label className="statement_form">Song name</Form.Label>
                        <Form.Control as="select" name="typeSelect">
                            <option value="">Select song</option>
                            <option value="type1">Song1</option>
                            <option value="type2">Song2</option>
                           

                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Pincode</Form.Label>
                        <Form.Control name="appleLink" placeholder='Pincode' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="otherLink">
                        <Form.Label className="statement_form">Time slot of when the music/content was used</Form.Label>
                        <Form.Control name="otherLink" placeholder='' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Date of when the music/content was used </Form.Label>
                        <Form.Control name="Confirmpassword" placeholder='' type="date" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Platform where the music/content was used </Form.Label>
                        <Form.Control name="Confirmpassword" placeholder='Platform where the music/content was used' type="text" />
                    </Form.Group>
                </Col>

            </Row>
        
            <Row>
                <Col md={12}>
                    <Form.Group controlId="appleLink">
                        {/* <Form.Label className="statement_form">Platform where the music/content was used </Form.Label> */}
                        <Form.Control name="Confirmpassword" placeholder='detailed address of the place of the music use' type="text" />
                    </Form.Group>
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group controlId="appleLink">
                        {/* <Form.Label className="statement_form">Platform where the music/content was used </Form.Label> */}
                        <Form.Control name="Confirmpassword" placeholder='Name of the person/company using the music / content' type="text" />
                    </Form.Group>
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group controlId="appleLink">
                        {/* <Form.Label className="statement_form">Platform where the music/content was used </Form.Label> */}
                        <Form.Control name="Confirmpassword" placeholder='Link of the recording as proof' type="text" />
                    </Form.Group>
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group controlId="appleLink">
                        {/* <Form.Label className="statement_form">Platform where the music/content was used </Form.Label> */}
                        <Form.Control name="Confirmpassword" placeholder='Your contact number' type="number" />
                    </Form.Group>
                </Col>

            </Row>


              
            <span className='btn_udate'><button >Update</button></span>
        </Form>
    )
}

export default PiracyComplaints
