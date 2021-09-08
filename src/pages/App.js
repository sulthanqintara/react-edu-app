import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Route path="/" exact />
      <Route path="/login" component={Login}/>
    </Router>
  );
}

export default App;
