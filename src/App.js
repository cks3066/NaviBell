import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </div>
  );
}

export default App;
