import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import audioContextSlice from 'slices/audioContextSlice';

export const store = configureStore({
  reducer: {
    audio: audioContextSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
