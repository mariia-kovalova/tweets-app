import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './shared/styles/theme';
import { App } from './components/App';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/tweets-app">
              <Global styles={GlobalStyles} />
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
