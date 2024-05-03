import  Header  from "./layouts/Header";

import DetailPage from "./components/DetailPage/DetailPage";
import SignUp from "./components/LoginPage/SignUp";
import LogIn from "./components/LoginPage/LogIn";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className ="App">
        <div className ="content">
          <Header />
            <Routes>
              <Route path="/detail" element={<DetailPage/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/login" element={<LogIn/>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
