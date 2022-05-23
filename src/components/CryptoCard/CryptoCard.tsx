import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from '../CryptoListHeader/Styled';
import {
  CryptoCardContainer,
  CryptoTextWrapper,
  DataContainer,
  TendencyText,
  TextBold,
  TextColumn,
} from './Styled';

export const CryptoCard = () => {
  return (
    <CryptoCardContainer>
      <DataContainer>
        <CryptoTextWrapper>
          <View>
            <Avatar
              source={{
                uri: 'https://avatars.githubusercontent.com/u/71611977?v=4',
              }}
            />
          </View>
          <TextColumn>
            <TextBold>Bitcoin</TextBold>
            <Text>BTC</Text>
          </TextColumn>
        </CryptoTextWrapper>
        <TextColumn>
          <TextBold>$ 7,215.68</TextBold>

          <TendencyText>
            <Text>
              <Icon name="north-east" size={20} color="#2CC54E" />
            </Text>
            <Text>1.82%</Text>
          </TendencyText>
        </TextColumn>
      </DataContainer>
    </CryptoCardContainer>
  );
};
