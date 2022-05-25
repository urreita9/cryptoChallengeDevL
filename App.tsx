import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './src/theme/Theme';
import {StackNavigator} from './src/navigation/StackNavigator';
import {ThemeProvider} from 'styled-components';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  </Provider>
);

export default App;
