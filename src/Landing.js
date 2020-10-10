import React from 'react';
import './Landing.css';

function Landing(){
  return (
    <div className="main">
        <img
          src={"/img/header_gradient_text.svg"}
          className="Header-img"
          alt=""
        />
        <div className="section-div">
      <div className="section-header">Our Mission</div>
      <div>We advocate for the inclusion of all groups in computer science!</div>
      </div>
    </div>
  );
}

export default Landing;