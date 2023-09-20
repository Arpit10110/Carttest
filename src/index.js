import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from  "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fwulh6r8i0r0xpmr.us.auth0.com"
    clientId="RcZ9m8W4Awl3HINgJi8hocPwahrHx0te"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
  <App/>
</Provider>
</Auth0Provider>
);
