import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useAppSelector} from '../../app/hooks';

import {CryptoCard} from '../../components/CryptoCard/CryptoCard';
import {
  AddCryptoButton,
  AddCryptoButtonText,
  CyptoListAddContainer,
  CyptoListScreenContainer,
  CyptoListScrollableContainer,
  CyptoListScrollView,
} from './Styled';

interface Props extends StackScreenProps<any, any> {}

export const CryptoListScreen = ({navigation}: Props) => {
  const cryptos = useAppSelector(state => state.cryptoSlice.cryptoList);
  return (
    <CyptoListScreenContainer>
      <CyptoListScrollableContainer>
        <CyptoListScrollView>
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.id} {...crypto} />
          ))}
        </CyptoListScrollView>
      </CyptoListScrollableContainer>

      <CyptoListAddContainer>
        <AddCryptoButton
          onPress={() => {
            navigation.navigate('AddCryptoScreen');
          }}>
          <AddCryptoButtonText>+ Add a Cryptocurrency</AddCryptoButtonText>
        </AddCryptoButton>
      </CyptoListAddContainer>
    </CyptoListScreenContainer>
  );
};
