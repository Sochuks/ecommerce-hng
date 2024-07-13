import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Theme 
import { ThemeProvider } from '@mui/material'
import { myTheme } from './components/Theme.jsx'
import ProductProvider from './contexts/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider >
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
  </ProductProvider>,
)
