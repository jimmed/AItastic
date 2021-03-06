import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';
import { connectStore } from '../plugins';

import 'foundation-sites/dist/css/foundation.css';
import './styles/index.css';
import '../assets/icons/style.css';

const store = configureStore();
connectStore(store);

function purgeStorage() {
  store.persistor.purge();
  window.location.reload();
}

const app = (
  <Provider store={store}>
    <App purge={purgeStorage} />
  </Provider>
);

// Render app
render(app, document.getElementById('app'));
