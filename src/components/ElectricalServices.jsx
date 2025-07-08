// This is the same as your ElectricalServices.js, just renamed to .jsx for Vite compatibility
import React from 'react';
import '../App.css'; // Ensure styles like .card, #electrical, #button are applied

const electricalServices = [
  {
    title: "House Wiring",
    image: "/assets/ecard1.jpg",
    description: "House Wiring – New & rewiring, modular switchboards, DB panels, earthing, and DG backup.",
  },
  {
    title: "Industrial Wiring",
    image: "/assets/ecard2.jpg",
    description: "Industrial setups with HT/LT panels, machine wiring, automation, and transformer installation.",
  },
  {
    title: "Solar",
    image: "/assets/ecard3.jpg",
    description: "On/Off-grid solar systems, inverters, batteries, controllers for homes, farms & industries.",
  },
  {
    title: "Motor Installation",
    image: "/assets/ecard4.jpg",
    description: "Installation of submersible/monoblock pumps, starters, VFDs, and maintenance services.",
  },
  {
    title: "Borewell Motor",
    image: "/assets/ecard5.avif",
    description: "Borewell motor erection, VFD setup, vibration control, wiring & maintenance support.",
  },
  {
    title: "Electrical Fencing",
    image: "/assets/ecard6.jpg",
    description: "Electric & solar fencing for security – farms, factories, homes with shock control systems.",
  },
];

const ElectricalServices = () => {
  return (
    <div id="electrical" className="text-center">
      <div id="eintro">
        <h1>Electrical</h1>
        <p>
          ⚡ House & industrial wiring, DB works, DG installation<br />
          💡 LED lighting, smart lighting, automation & energy-efficient solutions.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {electricalServices.map((service, index) => (
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

export default ElectricalServices;
