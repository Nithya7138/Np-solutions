import React, { useState } from 'react';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id="firstpage" className="text-center">
      <div id="intro">
        <h1 id="sub"><i className="fa-brands fa-studiovinari"></i> NP-Solutions <i className="fa-solid fa-lightbulb"></i></h1>
        <p>
          Providing expert services in electrical, plumbing, lighting, water applications, and security systems across domestic, industrial, and agricultural sectors.
        </p>
      </div>

      <div id="fdropdown" className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          More Info
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#electrical">Electrical</a></li>
            <li><a className="dropdown-item" href="#plumbing">Plumbing</a></li>
            <li><a className="dropdown-item" href="#CCTV">CCTV</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
