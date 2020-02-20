import React from 'react';
import Main from './source/screens/main';
import { Provider } from 'react-redux';
import store from './source/storage/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
