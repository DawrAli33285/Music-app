import React from 'react';
import './index.css';

const Content = () => {
  const mockData = [
    { category: 'Music', title: 'Lorem ipsum dolor', image: '../../../../assets/music_tab.png', items: 15 },
    { category: 'Content', title: 'Lorem ipsum dolor', image: 'image-url', items: 15 },
    // Add more mock data here
  ];

  return (
    <div className="content">
      {mockData.map((data, index) => (
        <div key={index} className="content-category">
          <div className="content-header">
            <h3>{data.category}</h3>
            <span>Explore all</span>
          </div>
          <div className="content-grid">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="content-card">
                <img src={data.image} alt={data.title} className="content-image" />
                <div className="content-details">
                  <h4>{data.title}</h4>
                  <p>{data.items} music</p>
                  <button className="play-button">Play</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
