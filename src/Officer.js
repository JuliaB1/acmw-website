import React from "react";
import Zoom from "react-reveal/Zoom";
import "./Officer.css";

function Officer(props) {
  const image = props.image !== undefined ? props.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  return (
    <Zoom>
      <div style={{ padding: "20px" }}>
        <div className="flex flex-column items-center">
          <div className="profile-pic" style={{backgroundImage: 'url('+ image +')'}} />
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {props.name}
          </div>
          <div style={{ textAlign: "center" }}>{props.role}</div>
        </div>
      </div>
    </Zoom>
  );
}

export default Officer;
