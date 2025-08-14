import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
console.log(import.meta.env.VITE_APP_NAME); // "MISTLLC"
console.log(import.meta.env.VITE_API_URL);  // Your backend URL 