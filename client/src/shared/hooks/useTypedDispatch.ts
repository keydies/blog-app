import { AppDispatch } from '@app/store';

import { useDispatch } from 'react-redux';

import { Dispatch } from '@reduxjs/toolkit';

export const useTypedDispatch = (): Dispatch => useDispatch<AppDispatch>();