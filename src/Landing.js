import React from 'react';
import './Landing.css';
import Officer from './Officer.js';

function Landing(){
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
          <Officer name="Julia Baylon" />
          <Officer name="Cindy Zhang" />
          <Officer name="Monica Bellare" />
          <Officer name="Ruining Ding"/>
          <Officer name="Lena O'Grady"/>
        </div>
        <div className="photo-grid">
          <Officer name="Preethi Kiruveedula"/>
          <Officer name="Lulu Wang"/>
          <Officer name="Ethan Wong"/>
          <Officer name="Michelle Kim"/>
          <Officer name="Maggie Huang"/>
        </div>
      </div>
    </div>
  );
}

export default Landing;