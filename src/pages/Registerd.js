import React from "react";
import Register from "../Components/Register";
import NotLogin from "./NotLogin";
import "./style.css";
function Loginin() {
  return (
    <div>
      <div className="nlo">
        <NotLogin />
      </div>
      <Register />
    </div>
  );
}

export default Loginin;
