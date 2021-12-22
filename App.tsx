/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import Stores from './src/stores';
import Routes from './src/routes';
import { Provider } from '@ant-design/react-native';
import './src/config/globalDeclare.d';
import global from './src/config/global';

const App = () => {

  _PROPS = global._PROPS;
  G_CONFIG = global.G_CONFIG;
  G_LOCALSTORAGE_REMOVE = global.G_LOCALSTORAGE_REMOVE;
  G_LOCALSTORAGE_CLEAR = global.G_LOCALSTORAGE_CLEAR;
  G_LOCALSTORAGE_GET = global.G_LOCALSTORAGE_GET;
  G_LOCALSTORAGE_SET = global.G_LOCALSTORAGE_SET;
  G_DATE_FORMAT = global.G_DATE_FORMAT;

  return (
    <Provider {...Stores}
      theme={{
        'color_text_base': useColorScheme() === 'dark' ? '#ffffff' : '#000000',
        'color_text_base_inverse': useColorScheme() === 'dark' ? '#000000' : '#ffffff',
        'fill_base': G_CONFIG.componentBackgroundColor,
      }}>
      <Routes />
    </Provider>
  );

};

export default App;
