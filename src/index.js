import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <MetaMaskUIProvider sdkOptions={{
        dappMetadata: {
          name: "danyang dao",
          url: window.location.href,
        },
      }}>
        <App />
      </MetaMaskUIProvider>
    </HashRouter>
  </React.StrictMode>
);

