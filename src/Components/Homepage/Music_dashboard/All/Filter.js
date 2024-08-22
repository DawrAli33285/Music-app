import React from 'react';
import './index.css';

const Filter = ({filterMusic,originalMusic,setOriginalMusic,music,setMusic,filter,setFilter}) => {
  return (
    <div className="filter">
      <h3 className="filter-title">Filter</h3>
      <div className="filter-category">
        <div className="filter-header">
          <h4>Genre</h4>
          <span className="filter-toggle">+</span>
        </div>
        {/* Add Genre Filter Options Here */}
      </div>
      <hr />
      <div className="filter-category">
        <div className="filter-header">
          <h4>Mood</h4>
          <span className="filter-toggle">+</span>
        </div>
        {['Uplifting', 'Calm', 'Melancholic'].map((mood, index) => (
  <div key={index} className="filter-option">
    <input 
      onChange={() => filterMusic(mood,'all')} 
      checked={filter.split(',').includes(mood)} 
      type="checkbox" 
      id={mood} 
      name={mood} 
    />
    <label htmlFor={mood}>{mood}</label>
  </div>
))}
      </div>
      <hr />
      <div className="filter-category">
        <div className="filter-header">
          <h4>Artists</h4>
          <span className="filter-toggle">+</span>
        </div>
        {/* Add Artists Filter Options Here */}
      </div>
      <hr />
      <div className="filter-category">
        <div className="filter-header">
          <h4>Language</h4>
          <span className="filter-toggle">+</span>
        </div>
        {/* Add Language Filter Options Here */}
      </div>
    </div>
  );
};

export default Filter;
