import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {NavigationContainer} from '@react-navigation/native';

import {StackNavigator} from './src/navigation/StackNavigator';

// import {Text, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!</Text>
      </View> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
