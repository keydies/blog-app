import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  _id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  address: string;
  website: string;
}
interface UserState {
  isAuth: boolean;
  userData: UserData;
}

const initialState: UserState = {
  isAuth: false,
  userData: {
    userName: '',
    _id: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    website: '',
  },
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthStatus(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUserData(state, action: PayloadAction<UserData>) {
      state.userData = action.payload;
    },
  },
});

export const userReducer = UserSlice.reducer;
