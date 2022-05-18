import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddCryptoScreen} from '../screens/AddCryptoScreen';
import {CryptoListScreen} from '../screens/CryptoListScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CryptoListScreen" component={CryptoListScreen} />
      <Stack.Screen name="AddCryptoScreen" component={AddCryptoScreen} />
    </Stack.Navigator>
  );
};
