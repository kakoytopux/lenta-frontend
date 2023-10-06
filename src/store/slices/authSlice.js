import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    value: true
  },
  reducers: {
    authTrue: state => {
      state.value = true;
    }
  }
});

export const { authTrue } = counterSlice.actions;

export default counterSlice.reducer;
