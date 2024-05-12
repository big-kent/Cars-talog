import DetailPage from "./components/DetailPage/DetailPage";
import LogIn from "./components/LoginPage/LogIn";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/LoginPage/Register";
import LogosPage from "./components/LogosPage/LogosPage";
import SpecificBrand from "./components/SpecificBrand/SpecificBrand";

function App() {


  return (
    <Router>
      <div className ="App">
        <div className ="content">
          <Routes>
              <Route path="/:make" element={<SpecificBrand/>} />
              <Route path="/logo" element={<LogosPage/>}></Route>
              <Route path="/:make/:model" element={<DetailPage/>}></Route>
              <Route path="/signup" element={<Register/>}></Route>
              <Route path="/login" element={<LogIn/>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
