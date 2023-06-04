import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: true,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const userReducer = UserSlice.reducer;
