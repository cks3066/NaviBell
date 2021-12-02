import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home";
import RoutePage from "./pages/RoutePage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/route" exact component={RoutePage} />
    </div>
  );
}

export default App;
