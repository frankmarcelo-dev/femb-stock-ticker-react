import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './design-system/styles/tokens.css'
import './design-system/styles/reset.css'
import './design-system/styles/global.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
