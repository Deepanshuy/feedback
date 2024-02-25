import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(

   <BrowserRouter>
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Toaster/>
    </ThemeProvider>
    </BrowserRouter>
)
