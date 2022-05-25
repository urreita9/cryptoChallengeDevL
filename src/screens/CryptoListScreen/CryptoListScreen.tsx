import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {CryptoCard} from '../../components/CryptoCard/CryptoCard';
import {
  AddCryptoButton,
  AddCryptoButtonText,
  CyptoListAddContainer,
  CyptoListScreenContainer,
  CyptoListScrollableContainer,
  CyptoListScrollView,
  NoCryptosSavedContainer,
  NoCryptosText,
} from './Styled';

import {setCryptos} from '../../features/crypto/cryptoSlice';
import {Screen} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<any, any> {}

export const CryptoListScreen = ({navigation}: Props) => {
  const {cryptoList, loading} = useAppSelector(state => state.cryptoSlice);
  const dispatch = useAppDispatch();
  const cryptoListMock = [
    {
      id: '1',
      slug: 'Bitcoin',
      symbol: 'BTC',
      avatar:
        'https://www.citypng.com/public/uploads/preview/-51614886667xgmehgrty6.png',
      price: 7215.68,
      percent_change: 1.83,
    },
    {
      id: '2',
      slug: 'Ethereum',
      symbol: 'ETH',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png',
      price: 146.83,
      percent_change: -2.46,
    },
    {
      id: '3',
      slug: 'XRP',
      symbol: 'XRP',
      avatar:
        'https://www.pngitem.com/pimgs/m/26-268780_ripple-xrp-icon-hd-png-download.png',
      price: 0.220568,
      percent_change: 0.19,
    },
  ];
  const navigateTo = (screen: string) => navigation.navigate(screen);
  useEffect(() => {
    removeData();
    setData();
    getData();
  }, []);
  const setData = async () => {
    try {
      await AsyncStorage.setItem('cryptoList', JSON.stringify(cryptoListMock));
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('cryptoList');
      if (value !== null) {
        dispatch(setCryptos(JSON.parse(value)));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('cryptoList');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CyptoListScreenContainer>
      <CyptoListScrollableContainer>
        {cryptoList?.length ? (
          <CyptoListScrollView>
            {cryptoList.map(crypto => (
              <CryptoCard key={crypto.id} {...crypto} />
            ))}
          </CyptoListScrollView>
        ) : (
          <NoCryptosSavedContainer>
            <NoCryptosText>Start saving cryptocurrencies!</NoCryptosText>
          </NoCryptosSavedContainer>
        )}
      </CyptoListScrollableContainer>
      <CyptoListAddContainer>
        <AddCryptoButton
          onPress={navigateTo.bind(this, Screen.ADD_CRYPTO_SCREEN)}>
          <AddCryptoButtonText>+ Add a Cryptocurrency</AddCryptoButtonText>
        </AddCryptoButton>
      </CyptoListAddContainer>
    </CyptoListScreenContainer>
  );
};
