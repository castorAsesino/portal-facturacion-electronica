import React, { useState, useEffect } from "react";


import { defaultTheme, ModigaTheme, EnvacoTheme, GlobalStyles } from "./components/styles/themes";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Quotes from "./components/Quotes";
import Quotes1 from "./components/Quotes1";
import Navbar from "./components/Navbar";
import Login2 from "./pages/Login/Login2";
import './App.css'; 
import Login3 from "./pages/Login/Login3";
import Facturacion from "./pages/Facturacion/Facturacion";
import LoginForm from "./pages/Login/LoginForm";
import {appTheme, theme, themes} from "./components/styles/themes";

/* 
import { ThemeProvider } from "@callstack/react-theme-provider"; */
 import { CssBaseline, ThemeProvider } from "@mui/material"; 

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const themeToggler = () => {
    console.log("click")
    setTheme(EnvacoTheme)
  };
  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme /> 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/1' element={<LoginForm />} />
            <Route path='/2' element={<Login3 />} />
            <Route path='/theme' element={<Quotes themeToggler={themeToggler} />} />
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
