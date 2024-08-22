
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; // Assuming you have a ProgressBar component
import Form from 'react-bootstrap/Form'; // Assuming you're using react-bootstrap

const Pricing = ({ nextstep, onPricingStepChange, setFormData, data }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [pricingData, setPricingData] = useState(data);
  console.log('pricingData :>> ', pricingData);
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [additionalOptions1, setAdditionalOptions1] = useState([]);

  useEffect(() => {
    onPricingStepChange(currentStep);
    localStorage.setItem('pricingStep', currentStep);
  }, [currentStep, onPricingStepChange]);

  const nextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const Case3Options = [
    "Clubs, pubs & night clubs",
    "Restaurants, dining rooms, bars, lounges, coffee houses, etc",
    "Multiplex & Shopping center, arcades, IT parks, etc",
    "Lodges, guest houses, vacation homes, resorts, etc",
    "Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services",
  ];

  const Case4Options = [
    "Seating Capacity",
    "Price of licence (1 year validity)",
    "Price of licence (6 months validity)",
  ];

  useEffect(() => {
    setAdditionalOptions(Case3Options.map(option => ({ value: option, label: option })));
  }, []);

  useEffect(() => {
    setAdditionalOptions1(Case4Options.map(option => ({ value: option, label: option })));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
   
      if (type === "checkbox" || type === "radio") {
        setPricingData(prevData => ({
          ...prevData,
          [name]: checked ? value : "",
        }));
      } else {
        setPricingData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

    const handleBlur = () => {
      setFormData(pricingData);
    };



    const renderForm = () => {
      switch (currentStep) {
        case 1:
          return (
            <form className="Progress_form">
              <div>
                <h4>Licence for the song that you select:</h4>
                {/* {["Public places", "Commercial / Business_purpose", "Metaverse", "Specific_/_Custom licences"].map(option => ( */}
                <>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="usage"
                      value='Public' // Keep the display value
                      checked={pricingData.usage === "Public"} // Check against simplified value
                      onChange={handleChange} />
                    <label>Public places</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="usage"
                      value="Commercial" // Keep the display value
                      checked={pricingData.usage === "Commercial"} // Check against simplified value
                      onChange={handleChange} />
                    <label>Commercial / Business purpose</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="usage"
                      value="Metaverse" // Keep the display value
                      checked={pricingData.usage === "Metaverse"} // Check against simplified value
                      onChange={handleChange} />
                    <label>Metaverse</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="usage"
                      value="Specific" // Keep the display value
                      checked={pricingData.usage === "Specific"} // Check against simplified value
                      onChange={handleChange} />
                    <label>Specific / Custom licences</label>
                  </div>

                </>
                {/* ))} */}
              </div>
              <div className="btn_wapper">
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          );
        case 2:
          return (
            <form className="Progress_form">
              <div>
                <h4>Licence to use music in public places as:</h4>
                {/* {["Background", "Live pperformance"].map(option => ( */}
                  <><div className="check_progress" >
                    <input
                      type="radio"
                      name="public_places"
                      value="background"
                      checked={pricingData.public_places === "background"}
                      onChange={handleChange} />
                    <label>Background</label>
                  </div><div className="check_progress">
                      <input
                        type="radio"
                        name="public_places"
                        value="live_performance"
                        checked={pricingData.public_places === "live_performance"}
                        onChange={handleChange} />
                      <label>Live pperformance</label>
                    </div></>
                {/* ))} */}
              </div>
              <div className="btn_wapper">
                <button type="button" onClick={prevStep} className="btn-light">
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          );
        case 3:
          return (
            <form className="Progress_form">
              <div>
   
                <h4>Public Place Usage Choice:</h4>
                {/* {Case3Options.map(option => ( */}
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="public_places_choices"
                      value="clubs"
                      checked={pricingData.public_places_choices === "clubs"}
                      onChange={handleChange}
                    />
                    <label>Clubs, pubs & night clubs</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="public_places_choices"
                      value="dining"
                      checked={pricingData.public_places_choices === "dining"}
                      onChange={handleChange}
                    />
                    <label>Restaurants, dining rooms, bars, lounges, coffee houses, etc</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="public_places_choices"
                      value="multiplex"
                      checked={pricingData.public_places_choices === "multiplex"}
                      onChange={handleChange}
                    />
                    <label>Multiplex & Shopping center, arcades, IT parks, etc</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="public_places_choices"
                      value="lodges"
                      checked={pricingData.public_places_choices === "lodges"}
                      onChange={handleChange}
                    />
                    <label>Lodges, guest houses, vacation homes, resorts, etc</label>
                  </div>
                  <div className="check_progress">
                    <input
                      type="radio"
                      name="public_places_choices"
                      value="halls"
                      checked={pricingData.public_places_choices === "halls"}
                      onChange={handleChange}
                    />
                    <label>Banquet halls & auditoriums, sports, service-oriented premises, waiting premises, transport services</label>
                  </div>
                {/* ))} */}
              </div>
              <div className="btn_wapper">
                <button type="button" onClick={prevStep} className="btn-light">
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          );
        case 4:
          return (
            <form className="Progress_form">
  
              <div>
                <h4>Public places Background - clubs, pubs & night clubs</h4>
                <Form.Group controlId="seating">
                  <Form.Label className="statement_form">Seating Capacity</Form.Label>
                  <Form.Control
                    name="seating"
                    placeholder="Enter Seating Capacity"
                    type="text"
                    value={pricingData.seating || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="price_12">
                  <Form.Label className="statement_form">Price of Licence (1 year validity)</Form.Label>
                  <Form.Control
                    name="price_12"
                    placeholder="Enter Price for 1 Year"
                    type="text"
                    value={pricingData.price_12 || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="price_6">
                  <Form.Label className="statement_form">Price of Licence (6 months validity)</Form.Label>
                  <Form.Control
                    name="price_6"
                    placeholder="Enter Price for 6 Months"
                    type="text"
                    value={pricingData.price_6 || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="btn_wapper">
                  <button type="button" onClick={prevStep} disabled={currentStep === 1} className="btn-light">
                    Back
                  </button>
                  <button type="button" onClick={nextstep}>
                    {currentStep === 4 ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            </form>
          );
        default:
          return null;
      }
    };

    return (
      <div>
        <div className="d-flex justify-content-between">
          <h2>Pricing</h2>
          <span>Step {currentStep}/4</span>
        </div>
        <ProgressBar step={currentStep} />
        {renderForm()}
      </div>
    );
  };

  export default Pricing;

