import React from "react";
import Zoom from "react-reveal/Zoom";
import "./Officer.css";

function Officer(props) {
  return (
    <Zoom>
      <div style={{ padding: "20px" }}>
        <div className="flex flex-column items-center">
          <div className="profile-pic" />
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
