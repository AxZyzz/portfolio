import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const root = document.getElementById('root')
if (root) {
  root.style.width = '100%'
  root.style.height = '100%'
  root.style.margin = '0'
  root.style.padding = '0'
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    }
    // Your other routes here
  ],
  {
    basename: '/portfolio' // Set to your GitHub repo name (without trailing slash)
  }
)

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
