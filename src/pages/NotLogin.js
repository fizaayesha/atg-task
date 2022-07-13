import React from "react";
import "../App.css";
import NavBar from "../Components/NavBar";
import Middle from "../Components/Middle";
import Third from "../Components/Third";
import Photos from "../Components/Photos";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Middle />
      <Third />
      <Photos />
    </div>
  );
}

export default App;
