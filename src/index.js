import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './assets/css/index.css';

import { HashRouter } from 'react-router-dom';
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "Danyang DAO",
            url: window.location.href,
          },
        }}
      >
        <App />
      </MetaMaskProvider>
    </HashRouter>
  </React.StrictMode>
);

