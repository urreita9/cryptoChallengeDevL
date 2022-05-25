import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Crypto} from '../../features/crypto/cryptoSlice';
import {Avatar} from '../CryptoListHeader/Styled';
import {
  CryptoCardContainer,
  CryptoTextWrapper,
  TendencyText,
  TextBold,
  TextColumn,
  PercentageText,
} from './Styled';

export const CryptoCard = ({
  slug,
  symbol,
  price,
  percent_change,
  avatar,
}: Crypto) => (
  <CryptoCardContainer>
    <CryptoTextWrapper>
      <View>
        <Avatar
          source={{
            uri: avatar,
          }}
        />
      </View>
      <TextColumn bool={false}>
        <TextBold>{slug}</TextBold>
        <Text>{symbol}</Text>
      </TextColumn>
    </CryptoTextWrapper>
    <TextColumn bool>
      <TextBold>$ {price}</TextBold>
      <TendencyText>
        <Text>
          {percent_change > 0 ? (
            <Icon name={'north-east'} size={20} color={} />
          ) : (
            <Icon name={'south-west'} size={20} color="#FD483C" />
          )}
        </Text>
        <PercentageText bool={percent_change < 0 ? false : true}>
          {percent_change < 0 ? Math.abs(percent_change) : percent_change}%
        </PercentageText>
      </TendencyText>
    </TextColumn>
  </CryptoCardContainer>
);
