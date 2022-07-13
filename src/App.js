import React from "react";
import Middle from "./Components/Middle";
import NavBar from "./Components/NavBar";
import "./App.css";
import Third from "./Components/Third";
import Photos from "./Components/Photos";
// import Posts from "./Components/Posts";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Middle />
      <Third/>
      {/* <Posts/> */}
      <Photos/>
    </div>
  );
}

export default App;
