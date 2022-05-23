import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

// Define a type for the slice state
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
}

// Define the initial state using that type
const initialState: cryptoSliceState = {
  cryptoList: [
    {
      id: '1',
      slug: 'Bitcoin',
      symbol: 'BTC',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 7215.68,
      percent_change: 1.83,
    },
    {
      id: '2',
      slug: 'Ethereum',
      symbol: 'ETH',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 146.83,
      percent_change: 1.46,
    },
    {
      id: '3',
      slug: 'XRP',
      symbol: 'XRP',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 0.220568,
      percent_change: 1.83,
    },
  ],
  crypto: {},
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCryptos: (state, action: PayloadAction<Crypto[]>) => {
      state = {...state, cryptoList: [...state.cryptoList, ...action.payload]};
    },
    removeCrypto: (state, action: PayloadAction<string>) => {
      const deleteCrytpo = state.cryptoList.filter(
        crypto => crypto.id !== action.payload,
      );
      state = {...state, cryptoList: deleteCrytpo};
    },
  },
});

export const {setCryptos, removeCrypto} = cryptoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cryptoSlice.reducer;
