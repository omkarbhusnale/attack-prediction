import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginForm from "./Components/auth/LoginForm";
import Signup from "./Components/auth/Signup";
import BarChart from "./Components/BarChart";
import HighestSeverityComponent from "./Components/HighestSeverityComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/home" element={<HomePage />}></Route>
            <Route exact path="/login" element={<LoginForm />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/barchart" element={<BarChart />}></Route>
            <Route exact path="/severity" element={<HighestSeverityComponent />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
