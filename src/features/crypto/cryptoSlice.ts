import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

// Define a type for the slice state
interface Crypto {
  slug: string;
  symbol: string;
  avatar: string;
  price: number;
  percent_change: number;
}

interface cryptoSliceState {
  cryptoList: Crypto[];
}

// Define the initial state using that type
const initialState: cryptoSliceState = {
  cryptoList: [
    {
      slug: 'Bitcoin',
      symbol: 'BTC',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 7215.68,
      percent_change: 1.83,
    },
    {
      slug: 'Ethereum',
      symbol: 'ETH',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 146.83,
      percent_change: 1.46,
    },
    {
      slug: 'XRP',
      symbol: 'XRP',
      avatar: 'https://avatars.githubusercontent.com/u/71611977?v=4',
      price: 0.220568,
      percent_change: 1.83,
    },
  ],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCryptos: (state, action: PayloadAction<Crypto[]>) => {
      state.cryptoList = [...state.cryptoList, ...action.payload];
    },
  },
});

export const {setCryptos} = cryptoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default cryptoSlice.reducer;
