import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import userLogo from '../assets/user.png';

const NavBar = () => (
  <div className="wrapper">
    <nav className="nav-bar">
      <p>Bookstore CMS</p>
      <ul className="links-nav">
        <li><Link to="/"> Books </Link></li>
        <li><Link to="/Categories"> Categories </Link></li>
      </ul>
      <div className="user-logo">
        <img src={userLogo} alt="user icon" />
      </div>
    </nav>
  </div>
);

export default NavBar;
