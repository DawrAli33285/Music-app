import React from 'react';
import { Form } from 'react-bootstrap';
import "./uploardcontent.css"

const ContentLink = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Content Link</h2>
      <Form>
        <Form.Group controlId="instagramLink">
          <Form.Label className="statement_form">Instagram link:</Form.Label>
          <Form.Control name="instagramLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="youtubeLink">
          <Form.Label className="statement_form">YouTube link:</Form.Label>
          <Form.Control name="youtubeLink"  placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="twitterLink">
          <Form.Label className="statement_form">Twitter link:</Form.Label>
          <Form.Control name="twitterLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="facebookLink">
          <Form.Label className="statement_form">Facebook link:</Form.Label>
          <Form.Control name="facebookLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="linkedinLink">
          <Form.Label className="statement_form">LinkedIn link:</Form.Label>
          <Form.Control name="linkedinLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="peopleLink">
          <Form.Label className="statement_form">People link:</Form.Label>
          <Form.Control name="peopleLink"  placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="snapchatLink">
          <Form.Label className="statement_form">Snapchat link:</Form.Label>
          <Form.Control name="snapchatLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="otherLink">
          <Form.Label className="statement_form">Other link:</Form.Label>
          <Form.Control name="otherLink" placeholder='Enter link' type="text" onChange={handleChange} />
        </Form.Group>
      </Form>
    </div>
  );
}; 

export default ContentLink;
