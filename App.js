import React from 'react';
import Master from './source/master';
import { Provider } from 'react-redux';
import store from './source/storage/store';

export default function App() {
  return (
    <Provider store={store}>
      <Master>
        hello native!
      </Master>
    </Provider>
  );
}
