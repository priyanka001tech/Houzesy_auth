import React from 'react'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 892377438309-41g0mi04fgb7nu0qq3fl5hlg9dhmdsi7.apps.googleusercontent.com
// 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