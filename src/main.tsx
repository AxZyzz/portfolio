import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')
if (root) {
  root.style.width = '100%'
  root.style.height = '100%'
  root.style.margin = '0'
  root.style.padding = '0'
}

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
