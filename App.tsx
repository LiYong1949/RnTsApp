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
import { Provider } from 'mobx-react';
import Stores from './src/stores';
import Routes from './src/routes';
import './src/config/global';

const App = () => {

  return (
    <Provider {...Stores}>
      <Routes />
    </Provider>
  );

};

export default App;
