import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { UserData, UserSlice } from '@app/store/reducers/UserSlice';

import { SignInData } from '@features/SignUpForm/types/SignInData';
import { SignInInputLabels } from '@features/SignUpForm/types/SignInInputLabels';

import { RouteNames } from '@shared/enums/RouteNames';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import axios from 'axios';

import styles from './style.module.css';

export const SignUpForm = () => {
  const { push } = useRouter();

  const dispatch = useTypedDispatch();

  const { setUserAuthStatus, setUserData } = UserSlice.actions;

  const [signUpData, setSignUpData] = useState<SignInData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onInputChangeHandler = (label: string, value: string) => {
    setSignUpData((prevState: SignInData) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const onSignUpHandler = async () => {
    const user = await axios
      .post('http://localhost:8000/auth/signup', {
        userName: signUpData.userName,
        email: signUpData.email,
        password: signUpData.password,
      })
      .then((response) => response.data);
    if (user._id) {
      dispatch(setUserData(user as unknown as UserData));
      dispatch(setUserAuthStatus(true));
      push(RouteNames.HOME);
    }
  };

  return (
    <section className={styles['sign-up']}>
      <h2 className={styles['sign-up-title']}>Sign Up</h2>
      <fieldset className={styles['sign-up-field-wrapper']}>
        <label className={styles['sign-up-label']} htmlFor="username">
          Enter your username:
        </label>
        <input
          className={styles['sign-up-field']}
          type="text"
          id="username"
          name="username"
          value={signUpData.userName}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.USERNAME, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-up-field-wrapper']}>
        <label className={styles['sign-up-label']} htmlFor="email">
          Enter your email:
        </label>
        <input
          className={styles['sign-up-field']}
          type="email"
          id="email"
          name="email"
          value={signUpData.email}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.EMAIL, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-up-field-wrapper']}>
        <label className={styles['sign-up-label']} htmlFor="password">
          Enter your password:
        </label>
        <input
          className={styles['sign-up-field']}
          type="password"
          id="password"
          name="password"
          value={signUpData.password}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.PASSWORD, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-up-field-wrapper']}>
        <label className={styles['sign-up-label']} htmlFor="confirm-password">
          Confirm your password:
        </label>
        <input
          className={styles['sign-up-field']}
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={signUpData.confirmPassword}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.CONFIRM_PASSWROD, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-up-field-wrapper']}>
        <button className={styles['sign-up-submit-button']} onClick={onSignUpHandler}>
          Sign Up
        </button>
      </fieldset>
    </section>
  );
};
