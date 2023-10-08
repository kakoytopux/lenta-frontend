import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    value: true
  },
  reducers: {
    chartTrue: state => {
      state.value = true;
    },
    chartFalse: state => {
      state.value = false;
    }
  }
});

export const { chartTrue, chartFalse } = chartSlice.actions;

export default chartSlice.reducer;
