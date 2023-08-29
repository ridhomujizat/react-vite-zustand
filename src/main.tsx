import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';

import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import Theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const { PROD } = import.meta.env;

if (PROD) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </LocalizationProvider>
  );
}
