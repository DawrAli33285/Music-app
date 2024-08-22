import React, { useEffect, useState } from 'react';
import ContentInformation from './ContentInformation';
import ContentLink from './ContentLink';
import PermissionUpload from './PermissionUpload';
import Agreement from './Agreement';
import './uploardcontent.css';
import check from "../../../../../assets/check.svg"
import BackImg from '../../../../../assets/backIMg.svg'
import { IoMdClose } from "react-icons/io";
import BlubImg from "../../../../../assets/noun-light-blub.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploardContent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    ContentInformation: {},
    ContentLink: {},
    PermissionUpload: {},
    agreement: {},
  });
const navigate=useNavigate()
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };



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



  const handleDataChange = (stepData, stepName) => {
    setFormData(prevFormData => ({
        ...prevFormData,
        [stepName]: {
            ...prevFormData[stepName],
            ...stepData
        }
    }));
};
  
const createContent=async()=>{
try{
  let data=JSON.parse(localStorage.getItem('content'))

  const token = localStorage.getItem('authToken')
  let date=Date.now()?.toString()
  const contentLinkValues = Object.values(formData?.ContentLink || {});
  const firstContentLink = contentLinkValues.length > 0 ? contentLinkValues[0] : null;
 let finaldatatwo={
  upload_type:'content',
  owner_name:"Dawar",
  upload_music_link:firstContentLink,
  cover_template_link:formData?.ContentInformation?.coverLink,
  music_name:formData?.ContentInformation?.contentName,
  artist_name:formData?.ContentInformation?.artistName,
  release_date:"1724305322199",
  usage:data?.pricing[0]?.split('/')[0],
  music_category:'SONG',
  genres: ['2'],
  languages: ['1'],
  moods:['1'],
  license_end_date:"1724305322197"
 }
let mood;
if(formData?.ContentInformation?.mood=="Happy"){
  mood=['1']
}else if(formData?.ContentInformation?.mood=="Sad"){
  mood=['2']
}else{
  mood=['3']
}
let genre;
if(formData?.ContentInformation?.genre=="Pop"){
  genre=['1']
}else if(formData?.ContentInformation?.genre=="Rock"){
  genre=['2']
}else{
  genre=['3']
}
let language;
if(formData?.ContentInformation?.language=="English"){
  language=['1']
}else if(formData?.ContentInformation?.language=="Spanish"){
  language=['2']
}else{
  language=['3']
}

  let finaldata={
    artist_name: formData?.ContentInformation?.artistName,
    cover_template_link: formData?.ContentInformation?.coverLink,
    genres: genre,
    languages:language,
    license_end_date: "2024-05-15",
    moods: mood,
    music_category: "SONG",
    music_links: [
        {
            link: firstContentLink,
            platform: 2
        }
    ],
    music_name: formData?.ContentInformation?.contentName,
    owner_name: formData?.ContentInformation?.ownerName,
    release_date: formData?.ContentInformation?.releaseDate,
    upload_music_link: firstContentLink,
    upload_type: "Content",
    usage: data?.pricing[0]?.split('/')[0].trim()
  }
  console.log(finaldata   )
  console.log(formData)
  console.log(data)
  const response = await axios.post(`http://3.110.212.158:8000/api/music_details/`, finaldata, {
    headers: {
      Authorization: `Token ${token}`, 
    },
 
  })
  console.log(response)
  console.log("RESPONSE")
  localStorage.removeItem('content')
  navigate('/dashobard/home')
}catch(e){
console.log(e.message)
}
}

    return (

        <>
        <div className='back_screens'>
            <h1><a href="/dashboard/home"><img src={BackImg} alt='BackImg' />Upload Content</a></h1>
            <div className='d-block d-md-none blurb_img  ' onClick={handleBlurbClick} ><img src={BlubImg} alt='BlubImg' /></div>
            
        </div>
        <div className='step_part'>
                {/* <div className="stepForm_part">
        <div className='step_divForm'><p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Content information</p><span>1</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Content links</p><span>2</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Permission to upload</p><span>3</span></div>
        <div className='step_divForm'><p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>Agreement</p><span>4</span></div>
    </div> */}
                <div className="stepForm_part">
                    <div className={`step_divForm ${currentStep > 1 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(1)}>
                        <p onClick={() => setActiveStep(1)} className={currentStep === 1 ? 'active' : ''}>Content information</p>
                        <span>{currentStep >= 2 ? <img src={check} /> : 1}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 2 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(2)}>
                        <p onClick={() => setActiveStep(2)} className={currentStep === 2 ? 'active' : ''}>Content links</p>
                        <span>{currentStep >= 3 ? <img src={check} /> : 2}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 3 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(3)}>
                        <p onClick={() => setActiveStep(3)} className={currentStep === 3 ? 'active' : ''}>Permission to upload</p>
                        <span>{currentStep >= 4 ? <img src={check} /> : 3}</span>
                    </div>
                    <div className={`step_divForm ${currentStep > 4 ? 'stepCompleted' : ''}`} onClick={() => setCurrentStep(4)}>
                        <p onClick={() => setActiveStep(4)} className={currentStep === 4 ? 'active' : ''}>Agreement</p>
                        <span>4</span>
                    </div>
                </div>
                <div className={`custom-form content_info ${isActive ? 'active' : ''} ${currentStep === 3 ? 'Content_infowrapper' : ''}`}>
                <div className="note_SecWrapper mobile_only">
                    <div className='note_sec'>
                        <div className='note_secwrap'>
                    <h1>Note</h1>
                    <p>Since our customers buy a license for each song, we suggest you set an affordable price.</p>
                    
                    <span  onClick={handleSearchClick} className='close_icon'><IoMdClose /> </span>
                    </div>
                </div>
                </div>
                    {currentStep === 1 && (
                        <ContentInformation
                            data={formData.ContentInformation}
                            setFormData={(data) => handleDataChange(data, 'ContentInformation')} />
                    )}
                    {currentStep === 2 && (
                        <ContentLink
                            formData={formData.ContentLink}
                            setFormData={(data) => handleDataChange(data, 'ContentLink')} />
                    )}
                    {currentStep === 3 && (
                        <PermissionUpload
                        createContent={createContent}
                        nextstep={handleNext}
                            data={formData.PermissionUpload}
                            setFormData={(data) => handleDataChange(data, 'PermissionUpload')} />
                    )}
                    {currentStep === 4 && (
                        <Agreement
                            data={formData.agreement}
                            setFormData={(data) => handleDataChange(data, 'agreement')} />
                    )}
<div className={currentStep !== 3 && 'musicSubmitbtn'}>
                        {currentStep < 5 && currentStep !== 3 && <button className='musicSubmitbutton' onClick={handleNext}>Submit</button>}
                       {currentStep>4&&<button onClick={createContent}>
                          Submit Form
                        </button>}
                        {/* You can include a Previous button if needed */}
                        {/* {currentStep > 1 && <button onClick={handlePrev}>Previous</button>} */}
                    </div>
                </div>

            


                <div className='note_SecWrapper desktop_only'><div className='note_sec'>
                    <h1>Note</h1>
                    <p>Since our customers buy a license for each song, we suggest you set an affordable price.</p>
                </div>
                </div>
            </div></>
    );
};

export default UploardContent;
