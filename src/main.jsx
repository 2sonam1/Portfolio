import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from './components/About.jsx'
import Img from './components/Img.jsx'
import Projects from './components/Projects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Home />
    <About />
    <Img/>
    <Projects/>
  </>
 
)
