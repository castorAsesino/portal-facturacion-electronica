import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material"; 
import {ModigaTheme, theme, themes} from "./styles/themes";
import './App.css'; 

import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Facturacion from "./pages/Facturacion/Facturacion";






function App() {
  return (
    <ThemeProvider theme={ModigaTheme}>
    <CssBaseline enableColorScheme /> 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/facturacion' element={<Navbar />}>
              <Route index element={<Facturacion />} />
            </Route>
            <Route path='*' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
