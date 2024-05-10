import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation =()=> (
    <nav className="navigation">
    <div className="logo">Jiachilie</div>
    <ul className="links">
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/activity" className="link">Activities</Link></li>
      <li><Link to="/Therapy" className="link">BookTherapy</Link></li>
      <li><Link to="/chat" className="link">LetsChat</Link></li>


    </ul>
  </nav>
);

export default Navigation