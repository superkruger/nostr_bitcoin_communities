import React from 'react';
import ReactDOM from 'react-dom/client';
import { NDKProvider } from "@nostr-dev-kit/ndk-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NDKProvider
          relayUrls={[
              "wss://relay.damus.io",
              "wss://relay.snort.social",
              "wss://purplepag.es",
          ]}
      >
          <App />
      </NDKProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
