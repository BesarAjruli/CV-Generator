import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Editor from './Components/Form/finished.jsx'
import Values from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Values></Values>
  </StrictMode>,
)
