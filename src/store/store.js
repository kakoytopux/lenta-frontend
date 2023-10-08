import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import chartSlice from './slices/chartSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    chart: chartSlice,
  }
});
