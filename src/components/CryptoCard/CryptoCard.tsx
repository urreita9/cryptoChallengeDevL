import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Crypto} from '../../features/crypto/cryptoSlice';
import {Avatar} from '../CryptoListHeader/Styled';
import {
  CryptoCardContainer,
  CryptoTextWrapper,
  DataContainer,
  TendencyText,
  TextBold,
  TextColumn,
} from './Styled';

export const CryptoCard = ({
  slug,
  symbol,
  price,
  percent_change,
  avatar,
}: Crypto) => {
  return (
    <CryptoCardContainer>
      <DataContainer>
        <CryptoTextWrapper>
          <View>
            <Avatar
              source={{
                uri: avatar,
              }}
            />
          </View>
          <TextColumn right={false}>
            <TextBold>{slug}</TextBold>
            <Text>{symbol}</Text>
          </TextColumn>
        </CryptoTextWrapper>
        <TextColumn right>
          <TextBold>$ {price}</TextBold>

          <TendencyText>
            <Text>
              <Icon name="north-east" size={20} color="#2CC54E" />
            </Text>
            <Text>{percent_change}%</Text>
          </TendencyText>
        </TextColumn>
      </DataContainer>
    </CryptoCardContainer>
  );
};
