import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

export interface Crypto {
  id: string;
  slug: string;
  symbol: string;
  avatar: string;
  price: number;
  percent_change: number;
}

interface cryptoSliceState {
  cryptoList: Crypto[];
  crypto: Crypto | {};
  loading: boolean;
}

const initialState: cryptoSliceState = {
  cryptoList: [],
  crypto: {},
  loading: true,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptos: (state, action: PayloadAction<Crypto[]>) => {
      return (state = {
        ...state,
        cryptoList: action.payload,
        loading: false,
      });
    },
    removeCrypto: (state, action: PayloadAction<string>) => {
      const deleteCrytpo = state.cryptoList.filter(
        crypto => crypto.id !== action.payload,
      );
      return (state = {...state, cryptoList: deleteCrytpo});
    },
  },
});

export const {setCryptos, removeCrypto} = cryptoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cryptoSlice.reducer;
