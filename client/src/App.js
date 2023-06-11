import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import MainContent from './components/MainContent'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <TopNav></TopNav>




      <Routes>
        <Route path = "/" element= {<MainContent/>}>
          <Route path = "home" element={<Home/>}/>
        </Route>
      </Routes>


      

    </BrowserRouter>
  );
}

export default App;
