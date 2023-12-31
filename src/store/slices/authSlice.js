import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
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

export const { authTrue } = authSlice.actions;

export default authSlice.reducer;
