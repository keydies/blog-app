import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { UserData, UserSlice } from '@app/store/reducers/UserSlice';

import { LoginData } from '@features/LoginForm/types/LoginData';
import { LoginInputLabels } from '@features/LoginForm/types/LoginInputLabels';

import { RouteNames } from '@shared/enums/RouteNames';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import axios from 'axios';

import styles from './style.module.css';

export const LoginForm = () => {
  const { push } = useRouter();

  const dispatch = useTypedDispatch();

  const { setUserAuthStatus, setUserData } = UserSlice.actions;

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const onInputChangeHandler = (label: string, value: string) => {
    setLoginData((prevState: LoginData) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const onLoginHandler = async () => {
    const user = await axios
      .post('http://localhost:8000/auth/login', {
        email: loginData.email,
        password: loginData.password,
      })
      .then((response) => response.data);
    if (user._id) {
      dispatch(setUserData(user as unknown as UserData));
      dispatch(setUserAuthStatus(true));
      push(RouteNames.HOME);
    } else {
      alert('Invalid credantials');
    }
  };

  const onForgotPasswordHandler = async () => {
    const email = prompt('Enter new email');
    const password = prompt('Enter new your new password');
    const updatedUser = await axios
      .put('http://localhost:8000/user/update-password', {
        email,
        password,
      })
      .then((response) => response.data);
    if (updatedUser._id) {
      dispatch(setUserData(updatedUser as unknown as UserData));
      dispatch(setUserAuthStatus(true));
      push(RouteNames.HOME);
    }
  };

  return (
    <section className={styles['login']}>
      <h2 className={styles['login-title']}>Login</h2>
      <fieldset className={styles['login-field-wrapper']}>
        <label className={styles['login-label']} htmlFor="email">
          Enter your email:
        </label>
        <input
          className={styles['login-field']}
          type="email"
          id="email"
          name="email"
          value={loginData.email}
          onChange={(e) => onInputChangeHandler(LoginInputLabels.EMAIL, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['login-field-wrapper']}>
        <label className={styles['login-label']} htmlFor="password">
          Enter your password:
        </label>
        <input
          className={styles['login-field']}
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={(e) => onInputChangeHandler(LoginInputLabels.PASSWORD, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['login-field-wrapper']}>
        <button className={styles['login-forgot-button']} onClick={onForgotPasswordHandler}>
          Forgot password?
        </button>
        <button className={styles['login-submit-button']} onClick={onLoginHandler}>
          Log In
        </button>
      </fieldset>
    </section>
  );
};
