import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from "@mui/material";
import  Context  from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst> 
    <Context>
    <App />
    </Context>
     
   </StyledEngineProvider>
  </React.StrictMode>
);


