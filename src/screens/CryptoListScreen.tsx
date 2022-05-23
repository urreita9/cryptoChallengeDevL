import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {CryptoCard} from '../components/CryptoCard/CryptoCard';

interface Props extends StackScreenProps<any, any> {}

export const CryptoListScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 5}}>
        <ScrollView style={{flex: 1}}>
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
        </ScrollView>
      </View>

      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCryptoScreen');
          }}>
          <Text>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
