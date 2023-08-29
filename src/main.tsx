import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import Theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function Main() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <CssBaseline />
            <App />
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

const { PROD } = import.meta.env;
if (PROD) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
}
