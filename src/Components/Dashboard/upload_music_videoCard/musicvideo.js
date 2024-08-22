import React from "react";
import "./musicvideo.css";
import MusicImg from '../../../assets/music_img.png'
import VideoImg from '../../../assets/video_img.png'
import { useNavigate } from 'react-router-dom';
const MusisVideo = () => {

  // Render the static UI

  const navigate = useNavigate();
  const handleClickMusic = () => {
    navigate("/dashboard/Music-upload");
};
const handleClickContent = () => {
    navigate("/dashboard/upload-content");
};



  return (
    <div className='Music_videoUpload'>
        <div className="Uploaed_card bg_blue">
            <img src={MusicImg} alt="MusicImg" />
            <div className="Uploaded_content">
                <h5>Upload your music</h5>
                <p>Lorem ipsum dolor sit amet consectetur. </p>
                <button onClick={handleClickMusic}>Upload</button>
            </div>
        </div>

        <div className="Uploaed_card bg_lightPink">
            <img src={VideoImg} alt="VideoImg" />
            <div className="Uploaded_content">
                <h5>Upload your content</h5>
                <p>Lorem ipsum dolor sit amet consectetur. </p>
                <button onClick={handleClickContent}>Upload</button>
            </div>
        </div>
</div>
  );
};

export default MusisVideo;
