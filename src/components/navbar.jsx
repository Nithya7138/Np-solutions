// This is the same as your navbar.js, just renamed to .jsx for Vite compatibility
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaServicestack, FaAddressCard } from "react-icons/fa";
import { FaStudiovinari, FaHouse } from "react-icons/fa6";

const Navbar = () => (
  <nav className="nav-link navbar navbar-expand-lg bg-dark fixed-top">
    <div className="container">
      <a className="nav-link navbar-brand" href="/"  id = 'logo' >
        <h3><FaStudiovinari  /> NP Solutions</h3>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#firstpage" id='logos'><FaHouse /> Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#electrical"id='logos'><FaServicestack /> Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact" id='logos'><FaAddressCard /> Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
