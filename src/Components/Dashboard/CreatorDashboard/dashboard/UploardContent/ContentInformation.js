import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./uploardcontent.css"

const ContentInformation = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <div>
            <h2>Content Information</h2>
            <Form>


                <Form.Group controlId="ownerName">
                    <Form.Label className="statement_form">Copyright owner name *</Form.Label>
                    <Form.Control name="ownerName" type="text" placeholder='Enter name ' value={formData?.ownerName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="coverLink">
                    <Form.Label className="statement_form">Upload cover template *</Form.Label>
                    <Form.Control name="coverLink" type="text" placeholder='Enter link from platform(Ex:Spotify,Youtube,IMusic,etc) ' value={formData?.coverLink} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="contentName">
                    <Form.Label className="statement_form">Content name *</Form.Label>
                    <Form.Control name="contentName" type="text" placeholder='Enter music name ' value={formData?.contentName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="artistName">
                    <Form.Label className="statement_form">Artist name *</Form.Label>
                    <Form.Control name="artistName" type="text" placeholder='Enter artist name ' value={formData?.artistName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="releaseDate">
    <Form.Label>Month & date of release:</Form.Label>
    <Form.Control
        name="releaseDate"
        type="date"  // Change to 'date' to capture day, month, and year
        placeholder="Select date"
        value={formData?.releaseDate}
        onChange={handleChange}
        required
    />
</Form.Group>
                <Form.Group controlId="language">
                    <Form.Label className="statement_form">Language:</Form.Label>
                    <Form.Select name="language" value={formData?.language} onChange={handleChange} required placeholder='Select language' >
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        {/* Add more options as needed */}
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="genre">
                    <Form.Label className="statement_form">Select Genre:</Form.Label>
                    <Form.Select name="genre" value={formData?.genre} onChange={handleChange} required>
                        <option value="">Select Genre</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Hip Hop">Hip Hop</option>
                        {/* Add more options as needed */}
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="mood">
                    <Form.Label className="statement_form">Enter Mood:</Form.Label>
                    <Form.Select name="mood" value={formData?.mood} onChange={handleChange} required>
                        <option value="">Select Mood</option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Energetic">Energetic</option>
                        {/* Add more options as needed */}
                    </Form.Select>
                </Form.Group>


            </Form>
        </div>
    );
};

export default ContentInformation;
