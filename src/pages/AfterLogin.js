import React from "react";
import "../App.css";
import NavLogin from "../Components/NavLogin";
import ThirdLogin from "../Components/ThirdLogin";
import PhotosLogin from "../Components/PhotosLogin";
function App() {
  return (
    <div className="App">
      <NavLogin />
      <ThirdLogin/>
      <PhotosLogin/>
    </div>
  );
}

export default App;
