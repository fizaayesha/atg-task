import React from "react";
import "../App.css";
import NavLogin from "../Components/NavLogin";
import ThirdLogin from "../Components/ThirdLogin";
import PhotosFollowed from "../Components/PhotoFollowed";
function App() {
  return (
    <div className="App">
      <NavLogin />
      <ThirdLogin />
      <PhotosFollowed />
    </div>
  );
}

export default App;
