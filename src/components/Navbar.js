import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'purple', marginBottom: '10px' }}>
      <Toolbar className="toolbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Button color="inherit" component={Link} to="/" className="nav-link">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" className="nav-link">
            About
          </Button>
          <Button color="inherit" component={Link} to="/login" className="nav-link">
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
