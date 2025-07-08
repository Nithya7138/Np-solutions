// This is the same as your plumbingservice.js, just renamed to .jsx for Vite compatibility
import React from 'react';
import '../App.css';

const plumbingServices = [
  {
    title: "Outer Pipeline",
    image: "/assets/pcard1.jpg",
    description: "Underground water & sewage systems, leak detection, fire hydrants, rainwater lines.",
  },
  {
    title: "Concealed Pipeline",
    image: "/assets/pcard2.jpg",
    description: "Hidden water/gas piping for homes & offices. Seamless, leak-proof plumbing system.",
  },
  {
    title: "Modern Bath Fitting",
    image: "/assets/pcard3.webp",
    description: "Installations of rain showers, faucets, sensor taps, geysers, & premium fittings.",
  },
  {
    title: "Agricultural Pipeline",
    image: "/assets/pcard4.jpg",
    description: "Pipeline setup for farms – drip systems, borewell lines, pump & valve fittings.",
  },
  {
    title: "Borewell Pipe Erection",
    image: "/assets/pcard5.jpg",
    description: "Casing pipe, HDPE/GI fittings, flange connections, and leak-proof joints.",
  },
  {
    title: "Water Filter System",
    image: "/assets/pcard6.jpeg",
    description: "RO, UV, iron removal, softeners – filtration solutions for home, agri & industry.",
  },
];

const PlumbingServices = () => {
  return (
    <div id="plumbing" className="text-center">
      <div id="eintro">
        <h1>Plumbing Services</h1>
        <p>
          We offer professional plumbing solutions – pipelines, leak detection, pump installation,<br />
          bathroom fittings, water tanks & maintenance for homes, industries & agriculture.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {plumbingServices.map((service, index) => (
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

export default PlumbingServices;
