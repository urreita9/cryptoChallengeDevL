import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useAppSelector} from '../app/hooks';
import {CryptoCard} from '../components/CryptoCard/CryptoCard';

interface Props extends StackScreenProps<any, any> {}

export const CryptoListScreen = ({navigation}: Props) => {
  const cryptos = useAppSelector(state => state.cryptoSlice.cryptoList);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 5}}>
        <ScrollView style={{flex: 1}}>
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.id} {...crypto} />
          ))}
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
