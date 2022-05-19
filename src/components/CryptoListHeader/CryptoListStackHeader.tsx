import React from 'react';
import {Image, Text, View} from 'react-native';
import {Avatar, HeaderContainer, HeaderTitle} from './Styled';

export const CryptoListStackHeader = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>CryptoTracker Pro</HeaderTitle>

      <Avatar
        source={{
          uri: 'https://avatars.githubusercontent.com/u/71611977?v=4',
        }}
      />
    </HeaderContainer>
  );
};
