import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import DetailPage from "./components/DetailPage";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

 /*  const theme = createTheme({
  palette: {
      primary: {
        main: '#004225', // Purple and green play nicely together.
    }
    
  },
}); */


  return (
      <Router>
        <div className="App">
          <DetailPage></DetailPage>
          <Footer></Footer>
        </div>
      </Router>
  )
}

export default App;
