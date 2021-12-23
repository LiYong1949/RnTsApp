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
import { Appearance } from 'react-native';
import Routes from './src/routes';
import { Provider } from '@ant-design/react-native';
import './src/config/globalDeclare.d';
import global from './src/config/global';

const App = () => {

  // 全局变量
  _PROPS = global._PROPS;
  G_CONFIG = global.G_CONFIG;
  G_LOCALSTORAGE_REMOVE = global.G_LOCALSTORAGE_REMOVE;
  G_LOCALSTORAGE_CLEAR = global.G_LOCALSTORAGE_CLEAR;
  G_LOCALSTORAGE_GET = global.G_LOCALSTORAGE_GET;
  G_LOCALSTORAGE_SET = global.G_LOCALSTORAGE_SET;
  G_DATE_FORMAT = global.G_DATE_FORMAT;
  G_HTTP_WHITELIST = global.G_HTTP_WHITELIST;

  // 颜色模式（明亮、暗黑）
  let colorScheme = Appearance.getColorScheme();


  return (
    <Provider
      theme={{
        'color_text_base': colorScheme === 'dark' ? 'white' : 'black',
        'color_text_base_inverse': colorScheme === 'dark' ? 'black' : 'white',
        'fill_base': colorScheme === 'dark' ? 'black' : 'white',
      }}>
      <Routes />
    </Provider>
  );

};

export default App;
