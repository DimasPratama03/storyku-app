import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="App-sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/management">Management Story</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
