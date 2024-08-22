import React, { useEffect, useState } from 'react'
import './ProfileSettings.css'
import ProfileImg from '../../../../../assets/profile_img.png'

import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const ProfileSettings = () => {
    const [currentUser,setCurrentUser]=useState()
useEffect(()=>{
const fetchCurrentUser=async()=>{
    try{
    const token = localStorage.getItem('authToken')
let response=await axios.get(`http://3.110.212.158:8000/api/current-user/`,{
  headers:{
    Authorization: `Token ${token}`, 
  }
})

setCurrentUser(response.data)
    }catch(e){

    }
}
fetchCurrentUser();
},[])

    return (
        <Form className='profile_setting'>
         <div className='profile_Div'>
            <img src={ProfileImg} alt='ProfileImg' />
<div className='Profile_content'>
    <h5>Profile picture</h5>
<p>Recommended memory size is less then 12MB </p>
<button>Upload</button>
</div>
         </div>


            <Row >
                <Col md={6}>
                    <Form.Group controlId="name">
                        <Form.Label className="statement_form">Name</Form.Label>
                        <Form.Control value={currentUser?.first_name} name="name" placeholder='Enter name' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="Mobilenumber">
                        <Form.Label className="statement_form">Mobile number</Form.Label>
                        <Form.Control name="Mobilenumber" placeholder='Enter mobile number' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="emailaddress">
                        <Form.Label className="statement_form">Email address</Form.Label>
                        <Form.Control value={currentUser?.email} name="emailaddress" placeholder='Enter email address' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="typeSelect">
                        <Form.Label className="statement_form">Type</Form.Label>
                        <Form.Control as="select" name="typeSelect">
                            <option value="">Select type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                            <option value="type3">Type 3</option>

                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="Description">
                        <Form.Label className="statement_form">Description</Form.Label>
                        <Form.Control as="textarea" name="Description" placeholder="Enter info" rows={3} />
                    </Form.Group>
                </Col>

            </Row>

            <h1 className='text-start'>Change Password</h1>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Old Password</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="otherLink">
                        <Form.Label className="statement_form">Other link</Form.Label>
                        <Form.Control name="otherLink" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Confirm password</Form.Label>
                        <Form.Control name="Confirmpassword" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>

            </Row>


            <h1 className='text-start'>Bank account</h1>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Account number</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter account' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="otherLink">
                        <Form.Label className="Confirm_account">Confirm account no</Form.Label>
                        <Form.Control name="otherLink" placeholder='Confirm account  no' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">IFSC Code</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter IFSC number' type="text" />
                    </Form.Group>
                </Col>

            </Row>
            <span className='btn_udate'><button >Update</button></span>
        </Form>
    )
}

export default ProfileSettings