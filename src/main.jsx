import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
// import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "resume",
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
