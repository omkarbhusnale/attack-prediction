import React, { Component } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import Signup from "./Components/Signup";


class App extends Component {
  render() {
    return (
      <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
                 <Route exact path='/login' element={< LoginForm />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
          </Routes>
          </div>
       </Router>
    );
  }
}
export default App;
