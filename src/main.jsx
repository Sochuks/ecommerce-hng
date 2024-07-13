import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Theme
import { ThemeProvider } from '@mui/material';
import { myTheme } from './components/Theme.jsx';

import { ProductProvider } from './contexts/ProductContext.jsx';
import { SideBarProvider } from './contexts/SideBarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideBarProvider>
      <ProductProvider>
        <ThemeProvider theme={myTheme}>
          <App />
        </ThemeProvider>
      </ProductProvider>
    </SideBarProvider>
  </React.StrictMode>
);
