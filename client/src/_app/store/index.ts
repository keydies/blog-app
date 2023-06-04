import { createWrapper } from 'next-redux-wrapper';

import { postReducer } from '@app/store/reducers/PostSlice';
import { userReducer } from '@app/store/reducers/UserSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

export const setupStore = (): ToolkitStore => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const StoreWrapper = createWrapper<AppStore>(setupStore);
