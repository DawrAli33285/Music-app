import React, { useEffect, useState } from 'react';
import "./musicuploard.css"
import Form from 'react-bootstrap/Form';
const Agreement = ({ formData, setFormData }) => {


    const [agreement, setAgreement] = useState(formData);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAgreement((prev) => ({
            ...prev,
            [name]: value,
        }));
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // useEffect(() => {
    //     setFormData(agreement);
    // }, []);
    const handleBlur = () => {
        // setFormData(agreement);
    }

    return (
        <div>
            <h2>Agreement</h2>



            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Annexure</Form.Label>
                    <Form.Control as="textarea" rows={3} name="Annexure" onChange={handleChange} value={agreement?.Annexure || ''} onBlur={handleBlur
                    }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Agreement</Form.Label>
                    <Form.Control as="textarea" rows={3} name="Agreement" onChange={handleChange} onBlur={handleBlur
                    } value={agreement?.Agreement || ''}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Agreement;