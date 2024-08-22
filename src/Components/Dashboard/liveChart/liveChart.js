import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import './liveChart.css'; // Ensure this CSS file contains your styling
import { Link } from 'react-router-dom';
import { useGetMusicContentCountByYear } from '../../../Hooks/ApiService';

const LiveChart = ({ homeData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [currentRange, setCurrentRange] = useState([0, 5]); // Default to show Jan to Jun
  const [selectedYear, setSelectedYear] = useState("2024");

  const { data, error } = useGetMusicContentCountByYear(selectedYear);

  // Transform data into the format expected by Chart.js
  const transformedData = Object.entries(data?.monthly_content_counts || {}).map(([month, value]) => ({
    month: `${parseInt(month, 10)}`, // Assuming month is given as a number
    value,
    category: 'Content'
  })).concat(
    Object.entries(data?.monthly_music_counts || {}).map(([month, value]) => ({
      month: `${parseInt(month, 10)}`, // Assuming month is given as a number
      value,
      category: 'Music'
    }))
  );

  const updateChart = () => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: transformedData.slice(currentRange[0], currentRange[1] + 1).map(d => `Month ${d.month}`),
        datasets: [
          {
            label: 'Content',
            data: transformedData.filter(d => d.category === 'Content').slice(currentRange[0], currentRange[1] + 1).map(d => d.value),
            borderColor: '#FF5733', // Custom color for content
            backgroundColor: 'rgba(255, 87, 51, 0.1)', // Light red background for content
            fill: true,
            tension: 0.4,
            pointRadius: 0
          },
          {
            label: 'Music',
            data: transformedData.filter(d => d.category === 'Music').slice(currentRange[0], currentRange[1] + 1).map(d => d.value),
            borderColor: '#33C1FF', // Custom color for music
            backgroundColor: 'rgba(51, 193, 255, 0.1)', // Light blue background for music
            fill: true,
            tension: 0.4,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true // Show the legend to differentiate between categories
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const point = transformedData[currentRange[0] + context.dataIndex];
                return `${point.category}: ${point.value}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Month'
            },
            grid: {
              display: false
            }
          },
          y: {
            display: true // Show the y-axis
          }
        }
      }
    });

    chartInstanceRef.current = newChartInstance;
  };

  useEffect(() => {
    updateChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [currentRange, data]); // Update the chart when the current range or data changes

  const handlePrev = () => {
    setCurrentRange(prev => {
      const start = Math.max(prev[0] - 1, 0);
      const end = Math.max(prev[1] - 1, 5);
      return [start, end];
    });
  };

  const handleNext = () => {
    setCurrentRange(prev => {
      const start = Math.min(prev[0] + 1, transformedData.length - 6);
      const end = Math.min(prev[1] + 1, transformedData.length - 1);
      return [start, end];
    });
  };

  return (
    <div className="statements dashboard_bg">
      <div className="header">
        <h2>Statements</h2>
        <div className="filters">
          <div>
            <select>
              <option value="all">All</option>
              {/* Add more options as needed */}
            </select>
            <select
              onChange={(e) => setSelectedYear(e.target.value)}
              value={selectedYear}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <Link to="#">Explore</Link>
        </div>
      </div>
      <div className='chardt_rightContent'>
        <div className="chart-container">
          <canvas ref={chartRef} />
          <div className="nav-buttons">
            <button onClick={handlePrev} disabled={currentRange[0] === 0} className='prevbtn'>{'<'}</button>
            <button onClick={handleNext} disabled={currentRange[1] >= transformedData.length - 1} className='nextbtn'>{'>'}</button>
          </div>
        </div>
        <div className='music_content'>
          <div>
            <h6>Music & Content</h6>
            <b>{homeData?.content + homeData?.music}</b>
          </div>
          <div>
            <h6>Music</h6>
            <b>{homeData?.music}</b>
          </div>
          <div>
            <h6>Content</h6>
            <b>{homeData?.content}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChart;
