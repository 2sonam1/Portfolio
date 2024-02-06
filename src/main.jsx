import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter, Outlet, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Img from './components/Img.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/projects",
//         element: <Projects />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ]
//   }
// ]
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Home />
    <About />
    <Img />
    <Projects />
    <Contact />
    {/* <RouterProvider router={router} /> */}
  </>

)
