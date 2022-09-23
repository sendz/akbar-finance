import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Product/>} path="/product"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
