import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider } from '@chakra-ui/react';

////////////configuracion de idiomas/////////////
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();

