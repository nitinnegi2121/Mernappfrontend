import React, { createContext, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import "./App.css";
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Errorpage from './Component/Errorpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initialState, reducer } from "../src/Reducer/userReducer";
import RequireToken from './RequireToken';

//context api
export const UserContext = createContext();

const Routing = () => {
  return (

    <Routes>
      <Route path="/" element={<RequireToken element={<Home />} />} />
      <Route path="/about" element={<RequireToken element={<About />} />} />
      <Route path="/contact" element={<RequireToken element={<Contact />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>

  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
          <Routing />
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;
