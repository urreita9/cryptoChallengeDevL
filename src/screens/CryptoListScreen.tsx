import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const CryptoListScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>CryptoListScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddCryptoScreen');
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
