import React from 'react';
import './Landing.css';
import Officer from './Officer.js';

const officers = [
  { name: "Julia Baylon", role: "President" },
  { name: "Cindy Zhang", role: "Vice President" },
  { name: "Monica Bellare", role: "Mentorship" },
  { name: "Ruining Ding", role: "Mentorship" },
  { name: "Lena O'Grady", role: "WESP/QWER Hacks" },
  { name: "Preethi Kiruveedula", role: "External" },
  { name: 'Lulu Wang', role: 'External'},
  { name: 'Ethan Wong', role: 'Publicity'},
  { name: 'Michelle Kim', role: 'Day of Code'},
  { name: 'Maggie Huang', role: 'Finance'},
];

function Landing(){
  const officerMap = officers.map((officer, index)=>(
    <li key={index}>
      <Officer name={officer.name} role={officer.role}/>
    </li>
  ));
  return (
    <div className="main flex-container">
      <img
        src={"/img/header_gradient_text.svg"}
        className="Header-img"
        alt=""
      />
      <div className="our-mission-section-div">
        <div className="section-header">Our Mission?</div>
        <div>
          We advocate for the inclusion of all groups in computer science!
        </div>
      </div>
      <div className="maintext-section-div">
        <div className="section-header">Upcoming Events</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div style={{paddingTop:'50px'}}>
        <div className="section-header right-justify" style={{paddingRight:'50px'}}>Officers</div>
        <div className="photo-grid space-evenly">
          {officerMap.slice(0,5)}
        </div>
        <div className="photo-grid">
          {officerMap.slice(5)}
        </div>
      </div>
    </div>
  );
}

export default Landing;