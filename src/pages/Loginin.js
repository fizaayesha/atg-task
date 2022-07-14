import React from "react";
import Login from "../Components/Login";
import NotLogin from "./NotLogin";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";
function Loginin() {
  return (
    <div>
      <div className="nlo">
        <NotLogin />
      </div>
      <CancelIcon className="cross" />
      <Login />
    </div>
  );
}

export default Loginin;
