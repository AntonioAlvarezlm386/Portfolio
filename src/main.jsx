import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'
import i18n from './config/i18n.js'
import './index.css'
import Main from './ui/Main.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)