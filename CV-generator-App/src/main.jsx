import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Values from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Values></Values>
  </StrictMode>,
)
