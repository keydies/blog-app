import React, { useState } from 'react';

import { SignInData } from '@features/SignInForm/types/SignInData';
import { SignInInputLabels } from '@features/SignInForm/types/SignInInputLabels';

import styles from './style.module.css';

export const SignInForm = () => {
  const [signInData, setSignInData] = useState<SignInData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onInputChangeHandler = (label: string, value: string) => {
    setSignInData((prevState: SignInData) => ({
      ...prevState,
      [label]: value,
    }));
  };

  return (
    <section className={styles['sign-in']}>
      <h2 className={styles['sign-in-title']}>Sign In</h2>
      <fieldset className={styles['sign-in-field-wrapper']}>
        <label className={styles['sign-in-label']} htmlFor="username">
          Enter your username:
        </label>
        <input
          className={styles['sign-in-field']}
          type="text"
          id="username"
          name="username"
          value={signInData.userName}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.USERNAME, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-in-field-wrapper']}>
        <label className={styles['sign-in-label']} htmlFor="email">
          Enter your email:
        </label>
        <input
          className={styles['sign-in-field']}
          type="email"
          id="email"
          name="email"
          value={signInData.email}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.EMAIL, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-in-field-wrapper']}>
        <label className={styles['sign-in-label']} htmlFor="password">
          Enter your password:
        </label>
        <input
          className={styles['sign-in-field']}
          type="password"
          id="password"
          name="password"
          value={signInData.password}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.PASSWORD, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-in-field-wrapper']}>
        <label className={styles['sign-in-label']} htmlFor="confirm-password">
          Confirm your password:
        </label>
        <input
          className={styles['sign-in-field']}
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={signInData.confirmPassword}
          onChange={(e) => onInputChangeHandler(SignInInputLabels.CONFIRM_PASSWROD, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['sign-in-field-wrapper']}>
        <button className={styles['sign-in-submit-button']}>Sign In</button>
      </fieldset>
    </section>
  );
};
