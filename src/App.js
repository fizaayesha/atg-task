import React from "react";
import "./App.css";
import NotLogin from "./pages/NotLogin";
import AfterLogin from "./pages/AfterLogin";
import Followed from "./pages/Followed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loginin from "./pages/Loginin";
import Registerd from "./pages/Registerd";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={NotLogin} />
          <Route path="/join" exact component={AfterLogin} />
          <Route path="/followed" exact component={Followed} />
          <Route path="/login" exact component={Loginin} />
          <Route path="/register" exact component={Registerd} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
