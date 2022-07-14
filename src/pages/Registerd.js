import React from "react";
import Register from "../Components/Register";
import NotLogin from "./NotLogin";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Loginin() {
  return (
    <div>
      <div className="nlo">
        <NotLogin />
      </div>{" "}
      <CancelIcon className="cross" />
      <Register />
    </div>
  );
}

export default Loginin;
