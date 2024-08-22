// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='SIde_bar'>
      <ul>
        <li><Link to="/dashboard/title1">Title 1</Link></li>
        <li><Link to="/dashboard/title2">Title 2</Link></li>
        {/* Add more titles as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
