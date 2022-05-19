import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddCryptoScreen} from '../screens/AddCryptoScreen';
import {CryptoListScreen} from '../screens/CryptoListScreen';
import {CryptoListStackHeader} from '../components/CryptoListHeader/CryptoListStackHeader';

const Stack = createStackNavigator();
// #6A8197
export const StackNavigator = () => {
  return (
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
        name="CryptoListScreen"
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
        name="AddCryptoScreen"
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
};
