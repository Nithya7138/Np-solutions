// This is the same as your cctvservices.js, just renamed to .jsx for Vite compatibility
import React from 'react';
import '../App.css';

const cctvServices = [
  {
    title: "HD Camera Services",
    image: "/assets/ccard1.jpg",
    description: "HD wired & wireless cameras with night vision, motion detection & 24/7 surveillance.",
  },
  {
    title: "IP Camera Services",
    image: "/assets/ccard2.jpg",
    description: "IP cameras with NVR, network cables, remote access, and high-res video for all spaces.",
  },
  {
    title: "WiFi Camera Services",
    image: "/assets/ccard3.jpg",
    description: "Wireless cameras with SD/cloud storage, mobile app access, 2-way audio & alerts.",
  },
  {
    title: "Solar Camera",
    image: "/assets/ccard4.jpg",
    description: "Outdoor solar-powered cameras for farms, homes, remote areas. Fully wireless.",
  },
  {
    title: "Mobile DVR",
    image: "/assets/ccard5.jpg",
    description: "Vehicle surveillance for buses/cars – GPS tracking, multi-cam, real-time access.",
  },
  {
    title: "360° CCTV Camera",
    image: "/assets/ccard6.jpg",
    description: "Panoramic view cameras, no blind spots, motion alerts, remote access & storage.",
  },
];

const CCTVServices = () => {
  return (
    <div id="CCTV" className="text-center">
      <div id="eintro">
        <h1>CCTV Installation Services</h1>
        <p>
          Secure your spaces with HD, IP, WiFi & Solar cameras.<br />
          NP provides complete CCTV setup for homes, industries, and remote monitoring.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {cctvServices.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card button h-100">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a href="#" id="button">Click more info</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CCTVServices;
