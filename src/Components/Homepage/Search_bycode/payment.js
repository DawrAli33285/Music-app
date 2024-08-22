import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import videoPayment from "../../../../src/assets/payment_video.svg";
import videoIcons from "../../../../src/assets/payment_icons.png";
import PaymentSuccess from './paymentsuccess'; // Ensure this path is correct

const Payment = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const successHandler = () => {
        setShow(false);
        navigate('/paymentsuccess');
    }

    return (
        <Container className='Payment_option'>
            <div className="pb-1">
                <h2 className="d-flex align-items-center">
                    <Link to={{ pathname: '/serch_bycode', state: { initialStep: 5 } }} style={{ textDecoration: 'none', color: 'black' }}><MdOutlineKeyboardArrowLeft style={{ width: "20" }} /></Link>
                    Payment options
                </h2>
            </div>
            <Row className="mt-3">
                <Col xs={12} md={7}>
                    <Card>
                        <Card.Body>
                            <h6>Credit | Debit | ATM Card</h6>
                            <p className="text-muted mb-3">
                                We accept <img src={videoIcons} alt="videoIcons" className="mx-2" />
                            </p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formNameOnCard">
                                    <Form.Label>Name on card</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formExpiry">
                                            <Form.Label>Expiry (Month/Year)</Form.Label>
                                            <Form.Control type="text" placeholder="MM/YY" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formCVV">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control type="text" placeholder="Enter CVV" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="warning" className="w-100 btn_one" onClick={() => setShow(true)}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={5}>
                    <Card>
                        <Card.Body>
                            <h6>Order summary</h6>
                            <div className="d-flex align-items-center mt-3 select_yearly ">
                                <p className="mb-0 d-flex gap-2"><img src={videoPayment} alt='videoPayment' /> Lorem ipsum dolor sit</p>
                                <Form.Control as="select" className="ml-2 gp-3" defaultValue="1500">
                                    <option value="1500">₹1500 per Year</option>
                                    <option value="2500">₹2500 per Year</option>
                                </Form.Control>
                            </div>
                            <h6 className="mt-3 total_amount">Total ₹1500</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <PaymentSuccess show={show} handleClose={() => setShow(false)} onSuccess={successHandler} />
        </Container>
    );
};

export default Payment;
