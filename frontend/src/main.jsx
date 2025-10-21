import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router"
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
        <Toaster position='bottom-right' reverseOrder={true}/>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
