import React from 'react';
import './uploardcontent.css'; // Import the CSS for styling

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-container">
      <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 3 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 4 ? 'active' : ''}`}></div>
    </div>
  );
};

export default ProgressBar;