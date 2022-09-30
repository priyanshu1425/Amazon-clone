import React from "react";
import './App.css';
import Header from "./Header.js";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
function App() {
  return (
    <>
    {/* <Router> */}
        <div className="app">
           {/* <Routes>
              <Route path = "/" element={<Header />} />
              <Route path = "/" element={<Home />} />

          </Routes> */}
         <Header />
         <Home />
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
