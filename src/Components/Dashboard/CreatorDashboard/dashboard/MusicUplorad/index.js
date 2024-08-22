// import React, { useEffect, useState } from 'react';
// import SongInformation from './SongInformation';
// import SongLinks from './SongLinks';
// import Pricing from './Pricing';
// import GeneralLicence from './GeneralLicence';
// import Agreement from './Agreement';
// import './musicuploard.css'
// import BlubImg from "../../../../../assets/noun-light-blub.png"
// import check from "../../../../../assets/check.svg"
// import BackImg from '../../../../../assets/backIMg.svg'
// import PrizeImg from '../../../../../assets/predefined_prize.svg'
// import { IoMdClose } from "react-icons/io";


// const MusicUplorad = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [activeStep, setActiveStep] = useState();
//     console.log('currentStep :>> ', currentStep);
//     const [showPredefinedPrice, setShowPredefinedPrice] = useState(false);

//     const [prisingStep, setPrisingStep] = useState(
//         localStorage.getItem("pricingStep") || ""
//     );
//     //   console.log('prisingStep', prisingStep)
//     const [formData, setFormData] = useState({
//         songInformation: {},
//         songLinks: {},
//         pricing: {},
//         generalLicence: {},
//         agreement: {},
//     });

//     const [isActive, setIsActive] = useState(false);

//     const handleSearchClick = () => {
//         setIsActive(!isActive); 
//     };

//     const handleBlurbClick = () => {
//         setIsActive(true);
//     };

//     const handleCloseClick = () => {
//         setIsActive(false);
//     };


//     const handleNext = () => {
//         // debugger;
//         // if (prisingStep === 4) {
//         localStorage.removeItem("pricingStep");
//         // }
//         setCurrentStep(currentStep + 1);
//     };

//     const handlePrev = () => {
//         setCurrentStep(currentStep - 1);
//     };
// console.log('formData :>> ', formData);


//     // const handleDataChange = (stepData, stepName) => {
//     //     setFormData({
//     //         ...formData,
//     //         [stepName]: stepData
//     //     });
//     // };

//     const handleDataChange = (stepData, stepName) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [stepName]: { ...prevData[stepName], ...stepData }
//         }));
//     };
//     const handlePricingStepChange = (step) => {
//         if (step === 4) {
//             setShowPredefinedPrice(true);
//         } else {
//             setShowPredefinedPrice(false);
//         }
//     };
//     useEffect(() => {
//         console.log('Current formData:', formData);
//     }, [formData]);
//     return (
//         <>
//             <div className='back_screens'>
//                 <h1><a href="/dashboard/home"><img src={BackImg} alt='BackImg' />Music upload</a></h1>
//                 <div className='d-block d-md-none blurb_img' onClick={handleBlurbClick}><img src={BlubImg} alt='BlubImg' /></div>
//             </div>
//             <div className='step_part'>

//                 <div className="stepForm_part">

//                     <div className={`step_divForm ${currentStep > 1 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(1)}><p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Song information</p><span>{currentStep >= 2 ? <img src={check} /> : 1}</span></div>
//                     <div className={`step_divForm ${currentStep > 2 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(2)}><p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Song links</p><span>{currentStep >= 3 ? <img src={check} /> : 2}</span></div>
//                     <div className={`step_divForm ${currentStep > 3 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(3)}><p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Pricing</p><span>{currentStep >= 4 ? <img src={check} /> : 3}</span></div>
//                     <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(4)}><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>General licence</p><span>{currentStep >= 5 ? <img src={check} /> : 4}</span></div>
//                     <div className={`step_divForm ${currentStep > 5 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(5)}><p onClick={() => setActiveStep(5)} className={currentStep === 5 ? 'active' : ''}>Agreement</p><span>5</span></div>
//                 </div>
//                 <div className='Custom_formwrapper'>
//                     {showPredefinedPrice && currentStep === 3 &&
//                         <div className='Predefined_price top_prices'>
//                             <div className='note_secwrap'>
//                                 <h1>Can we use previously given information?</h1>
//                             </div>

//                             <div className='customize_btns'>
//                                 <button className='customize_btn btn-light'>No, Customize it</button>
//                                 <button className='customize_btn '>Yes</button>
//                             </div>

//                         </div>
//                     }
//                     <div className={`custom-form content_info ${isActive ? 'active' : ''} ${currentStep === 3 ? 'Content_infowrapper' : ''}`}>
//                         <div className='note_SecWrapper mobile_only'>
//                             <div className='note_sec'>
//                                 <div className='note_secwrap'>
//                                     <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
//                                     <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>
//                                     <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
//                                 </div>

//                             </div>
//                             {currentStep === 3 &&
//                                 <div className='Predefined_price'>
//                                     <div className='note_secwrap'>
//                                         <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
//                                         <p>Do you like to take the same package as earlier?</p>
//                                         <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
//                                     </div>

//                                     <div className='customize_btns'>
//                                         <button className='customize_btn btn-light'>No, Customize it</button>
//                                         <button className='customize_btn '>Yes</button>
//                                     </div>

//                                 </div>
//                             }
//                         </div>
//                         {currentStep === 1 && (
//                             <SongInformation
//                                 data={formData.songInformation}
//                                 setFormData={(data) => handleDataChange(data, 'songInformation')} />
//                         )}
//                         {currentStep === 2 && (
//                             <SongLinks
//                                 formData={formData.songLinks}
//                                 setFormData={(data) => handleDataChange(data, 'songLinks')} />
//                         )}

//                         {currentStep === 3 && (
//                             <Pricing
//                                 nextstep={handleNext}
//                                 data={formData.pricing}
//                                 setFormData={(data) => handleDataChange(data, 'pricing')}
//                                 onPricingStepChange={handlePricingStepChange}
//                             // priseState={() => setPriseState()} />
//                             />
//                         )}
//                         {currentStep === 4 && (
//                             <GeneralLicence
//                                 data={formData.generalLicence}
//                                 setFormData={(data) => handleDataChange(data, 'generalLicence')} />
//                         )}
//                         {currentStep === 5 && (
//                             <Agreement
//                                 data={formData.agreement}
//                                 setFormData={(data) => handleDataChange(data, 'agreement')} />
//                         )}

//                         <div className={currentStep !== 3 && 'musicSubmitbtn'}>
//                             {/* {currentStep > 1 && <button onClick={handlePrev}>Previous</button>} */}
//                             {currentStep < 5 && currentStep !== 3 && <button onClick={handleNext} className='musicSubmitbutton'>Submit</button>}
//                             {currentStep === 5 && currentStep !== 3 && <button className='musicSubmitbutton' onClick={() => console.log(formData)}>Submit</button>}
//                         </div>



//                     </div>
//                 </div>
//                 <div className='note_SecWrapper desktop_only'>
//                     <div className='note_sec'>
//                         <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
//                         <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>

//                     </div>
//                     {currentStep === 3 &&
//                         <div className='Predefined_price'>
//                             <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
//                             <p>Do you like to take the same package as earlier?</p>
//                             <div className='customize_btns'>
//                                 <button className='customize_btn btn-light'>No, Customize it</button>
//                                 <button className='customize_btn '>Yes</button>
//                             </div>

//                         </div>
//                     }
//                 </div>


//             </div>



//         </>
//     );
// };

// export default MusicUplorad
import React, { useEffect, useState } from 'react';
import SongInformation from './SongInformation';
import SongLinks from './SongLinks';
import Pricing from './Pricing';
// import GeneralLicence from './GeneralLicence';
import Agreement from './Agreement';
import './musicuploard.css'
import BlubImg from "../../../../../assets/noun-light-blub.png"
import check from "../../../../../assets/check.svg"
import BackImg from '../../../../../assets/backIMg.svg'
import PrizeImg from '../../../../../assets/predefined_prize.svg'
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateMusic } from '../../../../../Hooks/ApiService';
const MusicUplorad = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [activeStep, setActiveStep] = useState();
    console.log('currentStep :>> ', currentStep);
    const [showPredefinedPrice, setShowPredefinedPrice] = useState(false);
    const [prisingStep, setPrisingStep] = useState(
        localStorage.getItem("pricingStep") || ""
    );
    //   console.log('prisingStep', prisingStep)
    const [formData, setFormData] = useState({
        music_links: [

        ],
        upload_type: "Music",
        owner_name: "",
        upload_music_link: "",
        cover_template_link: "",
        music_name: "",
        artist_name: "",
        release_date: "",
        usage: "",
        music_category: "",
        
        license_end_date: "2024-05-15",
        seating: "",
        price_6: "",
        price_12: "",
        public_places: "",
        public_places_choices: "",
        languages: [],
        genres: [],
        moods: [],
    });
    const [isActive, setIsActive] = useState(false);
    const handleSearchClick = () => {
        setIsActive(!isActive);
    };
    const handleBlurbClick = () => {
        setIsActive(true);
    };
    const handleCloseClick = () => {
        setIsActive(false);
    };
    const handleNext = () => {
        // debugger;
        // if (prisingStep === 4) {
        localStorage.removeItem("pricingStep");
        // }
        setCurrentStep(currentStep + 1);
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    console.log('formData :>> ', formData);
    // const handleDataChange = (stepData, stepName) => {
    //     setFormData({
    //         ...formData,
    //         [stepName]: stepData
    //     });
    // };

    // const handleDataChange = (stepData, stepName) => {
    // const handleDataChange = (stepData,stepName) => {
    //     debugger
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [stepName]: (stepName === "music_links") ? stepData : { ...prevData[stepName], ...stepData }
    //         // if(stepName === "music_links"){
    //         //     return {...prevData, [stepName]: stepData}
    //         // }else{

    //         //     ...stepData // Update formData with the incoming stepData
    //         // }
    //     }));
    // };
    // const handleDataChange = (stepData, stepName) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [stepName]: { ...prevData[stepName], ...stepData }
    //     }));
    // // };
    // const handleDataChange = (stepData) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         ...stepData // Update formData with the incoming stepData
    //     }));
    // };
    const handleDataChange = (stepData, stepName) => {
        setFormData(prevData => {
            if (stepName === 'music_links') {
                // Handle music_links updates specifically
                return {
                    ...prevData,
                    [stepName]: stepData // Replace the entire music_links array with the new data
                };
            } else if (stepName) {
                // Handle nested data updates for other steps
                return {
                    ...prevData,
                    [stepName]: {
                        ...prevData[stepName],
                        ...stepData
                    }
                };
            } else {
                // Handle normal data updates
                return {
                    ...prevData,
                    ...stepData
                };
            }
        });
    };




    const handlePricingStepChange = (step) => {
        if (step === 4) {
            setShowPredefinedPrice(true);
        } else {
            setShowPredefinedPrice(false);
        }
    };
    // useEffect(() => {
    //     console.log('Current formData:', formData);
    // }, [formData]);
    useEffect(() => {
        console.log('Current formData:', formData);
    }, [formData]);
    const handleSubmit = async () => {
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const response = await CreateMusic(formData);
            debugger
            if(response){
                
                toast.success("All data saved successfully!");
            }
            // console.log(response, "heyyyyyyyyyyyyyyyyyyyy")
        } catch (error) {
            toast.error("Failed to save data.");
        }
    };
    return (
        <>
            <div className='back_screens'>
                <h1><a href="/dashboard/home"><img src={BackImg} alt='BackImg' />Music upload</a></h1>
                <div className='d-block d-md-none blurb_img' onClick={handleBlurbClick}><img src={BlubImg} alt='BlubImg' /></div>
            </div>
            <div className='step_part'>
                <div className="stepForm_part">
                    <div className={`step_divForm ${currentStep > 1 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(1)}><p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Song information</p><span>{currentStep >= 2 ? <img src={check} /> : 1}</span></div>
                    <div className={`step_divForm ${currentStep > 2 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(2)}><p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Song links</p><span>{currentStep >= 3 ? <img src={check} /> : 2}</span></div>
                    <div className={`step_divForm ${currentStep > 3 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(3)}><p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Pricing</p><span>{currentStep >= 4 ? <img src={check} /> : 3}</span></div>
                    {/* <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(4)}><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>General licence</p><span>{currentStep >= 5 ? <img src={check} /> : 4}</span></div> */}
                    <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(4)}><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>Agreement</p><span>4</span></div>
                </div>
                <div className='Custom_formwrapper'>
                    {showPredefinedPrice && currentStep === 3 &&
                        <div className='Predefined_price top_prices'>
                            <div className='note_secwrap'>
                                <h1>Can we use previously given information?</h1>
                            </div>
                            <div className='customize_btns'>
                                <button className='customize_btn btn-light'>No, Customize it</button>
                                <button className='customize_btn '>Yes</button>
                            </div>
                        </div>
                    }
                    <div className={`custom-form content_info ${isActive ? 'active' : ''} ${currentStep === 3 ? 'Content_infowrapper' : ''}`}>
                        <div className='note_SecWrapper mobile_only'>
                            <div className='note_sec'>
                                <div className='note_secwrap'>
                                    <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
                                    <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>
                                    <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                                </div>
                            </div>
                            {currentStep === 3 &&
                                <div className='Predefined_price'>
                                    <div className='note_secwrap'>
                                        <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
                                        <p>Do you like to take the same package as earlier?</p>
                                        <span onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                                    </div>
                                    <div className='customize_btns'>
                                        <button className='customize_btn btn-light'>No, Customize it</button>
                                        <button className='customize_btn '>Yes</button>
                                    </div>
                                </div>
                            }
                        </div>
                        {currentStep === 1 && (
                            <SongInformation
                                data={formData}
                                setFormData={handleDataChange} />
                        )}
                        {currentStep === 2 && (
                            <SongLinks
                                formData={formData.music_links} // Pass the array of music links
                                setFormData={(updatedLinks) => handleDataChange(updatedLinks.music_links, 'music_links')} // Pass the handler to update music_links
                            />
                        )}

                        {currentStep === 3 && (
                            <Pricing
                                nextstep={handleNext}
                                data={formData}
                                setFormData={handleDataChange}
                                onPricingStepChange={handlePricingStepChange}
                            // priseState={() => setPriseState()} />
                            />
                        )}
                        {/* {currentStep === 4 && (
                            <GeneralLicence
                                data={formData.generalLicence}
                                setFormData={(data) => handleDataChange(data, 'generalLicence')} />
                        )} */}
                        {currentStep === 4 && (
                            <Agreement
                                data={formData.agreement}
                            // setFormData={(data) => handleDataChange(data, 'agreement')}
                            />
                        )}
                        <div className={currentStep !== 3 && 'musicSubmitbtn'}>
                            {/* {currentStep > 1 && <button onClick={handlePrev}>Previous</button>} */}
                            {currentStep < 4 && currentStep !== 3 && <button onClick={handleNext} className='musicSubmitbutton'>Submit</button>}
                            {currentStep === 4 && currentStep !== 3 && <button className='musicSubmitbutton' onClick={handleSubmit}>Submit</button>}
                        </div>
                    </div>
                </div>
                <div className='note_SecWrapper desktop_only'>
                    <div className='note_sec'>
                        <h1> <img src={BlubImg} alt='BlubImg' />Note</h1>
                        <p>Since our customers buy licence for each song,we suggest you to set an affordable price</p>
                    </div>
                    {currentStep === 3 &&
                        <div className='Predefined_price'>
                            <h1> <img src={PrizeImg} alt='BlubImg' />Predefined price</h1>
                            <p>Do you like to take the same package as earlier?</p>
                            <div className='customize_btns'>
                                <button className='customize_btn btn-light'>No, Customize it</button>
                                <button className='customize_btn '>Yes</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};
export default MusicUplorad