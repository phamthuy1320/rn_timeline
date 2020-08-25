import React from 'react';
import {Provider} from 'react-redux';
import store from './src/stores';
import AppNavigation from './src/navigations'


export default function App() {
  return (
    <Provider store = {store}>
      <AppNavigation/>
    </Provider>
  );
}


