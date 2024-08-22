import React from 'react';
import "./uploardcontent.css"
import Form from 'react-bootstrap/Form';
const Agreement = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Agreement</h2>



            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Annexure</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Agreement</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleChange}
                    />
                </Form.Group>
                <button type="button" >Back</button>
            </Form>
        </div>
    );
};

export default Agreement;
