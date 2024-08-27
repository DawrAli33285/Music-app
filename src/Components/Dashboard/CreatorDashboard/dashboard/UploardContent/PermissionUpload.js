import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar"; // Import the ProgressBar component
import { Form, Button } from "react-bootstrap";
const Case2Options = [
  "Youtube",
  "Instagram",
  "Facebook",
  "Set a discuss with copyva team",
];
const PermissionUpload = ({nextstep,createContent}) => {
  const [formData, setFormData] = useState({
    pricing: [],
    Seatingcapacity: [],
    case2Fields: Case2Options.map((option) => ({ value: option, selected: false })),
    case3Fields: [],
    case4Fields: [],
  });
// const [formData, setFormData] = useState({
//   pricing: [],
//   Seatingcapacity: [],
//   AddHeading: "",
//   Onetimeusage: "",
//   Multipleusage: "",
//   // Add other form data fields as needed
// });
  const [currentStep, setCurrentStep] = useState(1);
  const [additionalOptionsCase2, setAdditionalOptionsCase2] = useState([]);
  const [additionalOptionsCase4, setAdditionalOptionsCase4] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
  
    setFormData((prevData) => {
      const updatedData = { ...prevData };
  
      if (type === 'checkbox' || type === 'radio') {
        if (checked) {
          if (!Array.isArray(updatedData[name])) {
            updatedData[name] = [];
          }
          if (!updatedData[name].includes(value)) {
            updatedData[name].push(value);
          }
        } else {
          if (Array.isArray(updatedData[name])) {
            updatedData[name] = updatedData[name].filter(item => item !== value);
          }
        }
      } else if (type === 'text') {
        updatedData[name] = value;
      }
  
      return updatedData;
    });
  };
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
   localStorage.setItem("content",JSON.stringify(formData))
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Case3

 

  // const addOptionCase2 = () => {
  //   setAdditionalOptionsCase2((prevOptions) => [
  //     ...prevOptions,
  //     ...Case2Options.map((option) => ({ value: option, label: option })),
  //   ]);
  // };
  const addOptionCase2 = () => {
Case2Options.map((option)=>{
  setFormData((prevData) => ({
    ...prevData,
    case2Fields: [
      ...prevData.case2Fields,
      {value:option,selected:false}
    ],
  }));
})

   
  };
  useEffect(() => {
    // Initialize default options once
    setFormData((prevData) => ({
      ...prevData,
      case2Fields: Case2Options.map((option) => ({ value: option, selected: false })),
    }));
  }, []);
  const handleChangeCase2 = (index, e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedFields = [...prevData.case2Fields];
      if (checked) {
        updatedFields[index] = { ...updatedFields[index], selected: true };
      } else {
        updatedFields[index] = { ...updatedFields[index], selected: false };
      }
      return { ...prevData, case2Fields: updatedFields };
    });
  };
  
  // const handleChangeCase2 = (event) => {
  //   const { value } = event.target;
  //   setFormData((prevData) => {
  //     if (prevData.Seatingcapacity.includes(value)) {
  //       return {
  //         ...prevData,
  //         Seatingcapacity: prevData.Seatingcapacity.filter(
  //           (item) => item !== value
  //         ),
  //       };
  //     } else {
  //       return {
  //         ...prevData,
  //         Seatingcapacity: [...prevData.Seatingcapacity, value],
  //       };
  //     }
  //   });
  // };

  // Case4

  const Case4Options = ["AddHeading", "One time usage", "Multiple usage"];

  const addOptionCase4 = () => {
    setFormData((prevData) => ({
      ...prevData,
      case4Fields: [
        ...prevData.case4Fields,
        { label: "AddHeading", value: "" },
        { label: "One time usage", value: "" },
        { label: "Multiple usage", value: "" },
      ],
    }));
  };
  useEffect(() => {
    // Initialize default options once
    setAdditionalOptionsCase4(
      Case4Options.map((option) => ({ value: option, label: option }))
    );
  }, []);
  const handleChangeCase4 = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFields = [...prevData.case4Fields];
      updatedFields[index] = {
        ...updatedFields[index],
        [name]: value,
      };
      return { ...prevData, case4Fields: updatedFields };
    });
  };
  
  // const handleChangeCase4 = (e) => {
  //   const { name, value } = e.target;
  
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value, // Update the formData with the new value
  //   }));
  // };
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <form className="Progress_form">
            <div>
              <h4>
                Permission to remix/combine the selected content/video by
                editing:
              </h4>
              <div className="check_progress" >
                <input
                  type="radio"
                  name="pricing"
                  value="Commercial / Business purpose"
                  checked={formData?.pricing.includes(
                    "Commercial / Business purpose"
                  )}
                  onChange={handleChange}
                />
                <label>Commercial / Business purpose</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="pricing"
                  value="Specific / Custom licence"
                  checked={formData?.pricing.includes(
                    "Specific / Custom licence"
                  )}
                  onChange={handleChange}
                />
                <label>Specific / Custom licence</label>
              </div>
            </div>
            <div className="btn_wapper"><button type="button" onClick={nextStep}>
              Next
            </button>
            </div>
          </form>
        );
        case 2:
          return (
            <form className="Progress_form">
              <div>
                <h4>Commercial/Business Purpose:</h4>
                {formData.case2Fields.map((field, index) => (
                  <div className="check_progress" key={index}>
                    <input
                      type="checkbox"
                      name={`case2Field-${index}`} // Unique name attribute
                      value={field.value}
                      checked={field.selected}
                      onChange={(e) => handleChangeCase2(index, e)}
                    />
                    <label>{field.value}</label>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addOptionCase2}
                  className="bg_transparent"
                >
                  + Add an option if needed
                </button>
              </div>
              <div className="btn_wapper">
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
              <h4>Youtube:</h4>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="0 to 50,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "0 to 50,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>0 to 50,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="50,000 to 500,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "50,000 to 500,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>50,000 to 500,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="500,000 to 2,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "500,000 to 2,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>500,000 to 2,000,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="2,000,000 to 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "2,000,000 to 10,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>2,000,000 to 10,000,000 subscribers</label>
              </div>
              <div className="check_progress">
                <input
                  type="radio"
                  name="Seatingcapacity"
                  value="More than 10,000,000 subscribers"
                  checked={formData?.Seatingcapacity.includes(
                    "More than 10,000,000 subscribers"
                  )}
                  onChange={handleChange}
                />
                <label>More than 10,000,000 subscribers</label>
              </div>
            </div>
            <div className="btn_wapper">
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
                <h4>Licence to use the content on Youtube - 0 to 50,000 subscribers:</h4>
                {formData.case4Fields.map((field, index) => (
                  <Form.Group key={index} controlId={`field-${index}`}>
                    <Form.Label className="statement_form">
                      {field.label}
                    </Form.Label>
                    <Form.Control
                      name="value" // Ensure this name matches the key in formData
                      placeholder={`Enter ${field.label}`}
                      type="text"
                      value={field.value || ""}
                      onChange={(e) => handleChangeCase4(index, e)}
                      required
                    />
                  </Form.Group>
                ))}
                <button
                  type="button"
                  onClick={addOptionCase4}
                  className="add_option bg_transparent"
                >
                  Add an option if needed
                </button>
              </div>
              <div className="btn_wapper">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextstep}
                >
                  {currentStep === 4 ? 'Submit' : 'Next'}
                </button>
              
              </div>
    
            </form>
          );
        
      default:
        return null;
    }
  };

  return (
    <div className="Progress_form">
      <div class="d-flex justify-content-between">
        <h2>Permission Upload</h2>
        <span> Step {currentStep}/4</span>
      </div>
      <ProgressBar step={currentStep} />
      {renderForm()}
    </div>
  );
};

export default PermissionUpload;
