import React, { useEffect, useState } from 'react'
import './userprofile.css'
import ProfileImg from '../../../assets/profile_img.png'

import { Form, Row, Col } from 'react-bootstrap';
import { UpdateCurrentUser,UpdateCurrentUserPassword } from '../../../Hooks/ApiService';
import { fileToBase64 } from '../../../utils';

const UserProfile = ({ userProfile, setUserProfile }) => {
    const [profileImage, setProfileImage] = useState('')
    const [formData, setFormData] = useState({
        first_name: userProfile?.first_name || '',
        last_name: userProfile?.last_name || '',
        phone_number: userProfile?.phone_number || '',
        email: userProfile?.email || '',
        // profile_picture: profileImage
        // old_password: '',
        // new_password: '',
        // confirm_password: '',
        // account_number: '',
        // confirm_account: '',
        // ifsc_code: ''
    });
    const [passwordFormData, setPasswordFormData] = useState({
       
        current_password: '',
        new_password: '',
        confirm_password: '',
        // account_number: '',
        // confirm_account: '',
        // ifsc_code: ''
    });
    console.log('formData :>> ', formData);
    const onSubmit = async (e) => {
        // debugger
        e.preventDefault();
        // Assuming you have a function to handle the API request
        await UpdateCurrentUser({...formData, 'profile_picture': profileImage});
        // Update userProfile state if needed
    };
    const onPasswordSubmit = async (e) => {
        // debugger
        e.preventDefault();
        // Assuming you have a function to handle the API request
        await UpdateCurrentUserPassword(passwordFormData);
        // Update userProfile state if needed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    console.log('ProfileImage :>> ', profileImage);
    const fileHandler = async(file) => {
        try {
            const base64 = await fileToBase64(file);
            setProfileImage(base64);
          } catch (error) {
            console.error('Error converting file to base64:', error);
          }
        
    }

    return (
        <div className="purchases-list">
            <Form className='profile_setting' onSubmit={onSubmit}>
                <h1 className='text-start mb-3 d-none d-md-block'>User info</h1>
                <div className='profile_Div'>
                    <img src={ProfileImg} alt='ProfileImg' />
                    <div className='Profile_content'>
                        <h5>Profile picture</h5>
                        <p>Recommended memory size is less than 12MB </p>
                        <button type='button' onClick={() => document.querySelector("input[type='file']").click()}>
                            Upload
                        </button>
                        <input type='file' style={{ display: "none" }} onChange={(e) => fileHandler(e.target.files[0])} />
                    </div>
                </div>

                <Row className="mt-3">
                    <Col md={6}>
                        <Form.Group controlId="first_name">
                            <Form.Label className="statement_form">First Name</Form.Label>
                            <Form.Control name="first_name" value={formData.first_name} onChange={handleChange} placeholder='Enter name' type="text" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="last_name">
                            <Form.Label className="statement_form">Last Name</Form.Label>
                            <Form.Control name="last_name" value={formData.last_name} onChange={handleChange} placeholder='Enter last name' type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={6}>
                        <Form.Group controlId="phone_number">
                            <Form.Label className="statement_form">Phone Number</Form.Label>
                            <Form.Control name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder='Enter phone number' type="text" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label className="statement_form">Email address</Form.Label>
                            <Form.Control name="email" value={formData.email} disabled={true} placeholder='Enter email address' type="email" />
                        </Form.Group>
                    </Col>
                </Row>
                <span className='btn_udate'><button className='form_btn mt-2' type='submit'>Update</button></span>
            </Form>
            <Form className='profile_setting' onSubmit={onPasswordSubmit}>
                <h1 className='text-start'>Change Password</h1>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="old_password">
                            <Form.Label className="statement_form">Old Password</Form.Label>
                            <Form.Control name="current_password" value={formData.current_password} onChange={handlePasswordChange} placeholder='Enter password' type="password" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="new_password">
                            <Form.Label className="statement_form">New Password</Form.Label>
                            <Form.Control name="new_password" value={formData.new_password} onChange={handlePasswordChange} placeholder='Enter password' type="password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="confirm_password">
                            <Form.Label className="statement_form">Confirm password</Form.Label>
                            <Form.Control name="confirm_password" value={formData.confirm_password} onChange={handlePasswordChange} placeholder='Enter password' type="password" />
                        </Form.Group>
                    </Col>
                </Row>
                <span className='btn_udate'><button className='form_btn mt-2' type='submit'>Update</button></span>
            </Form>
            <Form className='profile_setting' onSubmit={onSubmit}>
                <h1 className='text-start'>Bank account</h1>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="account_number">
                            <Form.Label className="statement_form">Account number</Form.Label>
                            <Form.Control name="account_number" value={formData.account_number} onChange={handleChange} placeholder='Enter account' type="text" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="confirm_account">
                            <Form.Label className="Confirm_account">Confirm account no</Form.Label>
                            <Form.Control name="confirm_account" value={formData.confirm_account} onChange={handleChange} placeholder='Confirm account no' type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="ifsc_code">
                            <Form.Label className="statement_form">IFSC Code</Form.Label>
                            <Form.Control name="ifsc_code" value={formData.ifsc_code} onChange={handleChange} placeholder='Enter IFSC number' type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <span className='btn_udate'><button className='form_btn mt-2' type='submit'>Update</button></span>
            </Form>
        </div>
    )
}

export default UserProfile
