import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddCryptoScreen} from '../screens/AddCryptoScreen';
import {CryptoListScreen} from '../screens/CryptoListScreen/CryptoListScreen';
import {CryptoListStackHeader} from '../components/CryptoListHeader/CryptoListStackHeader';

const Stack = createStackNavigator();

export enum Screen {
  ADD_CRYPTO_SCREEN = 'ADD_CRYPTO_SCREEN',
  CRYPTO_LIST_SCREEN = 'CRYPTO_LIST_SCREEN',
}
export const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
      cardStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Stack.Screen
      name={Screen.CRYPTO_LIST_SCREEN}
      options={{
        title: 'CryptoTracker Pro',
        headerStyle: {
          backgroundColor: '#385775',
          height: 150,
        },
        headerTitle: props => <CryptoListStackHeader />,
      }}
      component={CryptoListScreen}
    />
    <Stack.Screen
      name={Screen.ADD_CRYPTO_SCREEN}
      options={{
        headerBackTitle: 'Back to List',
        headerTintColor: '#6A8197',
        headerTitleStyle: {
          display: 'none',
        },
      }}
      component={AddCryptoScreen}
    />
  </Stack.Navigator>
);
