import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './Head.tsx'
import App from './App.tsx'
import Foot from './Foot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Head />
    <App />
    <Foot />
  </StrictMode>,
)
