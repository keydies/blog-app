import React, { useState } from 'react';

import { LoginData } from '@features/LoginForm/types/LoginData';
import { LoginInputLabels } from '@features/LoginForm/types/LoginInputLabels';

import styles from './style.module.css';

export const LoginForm = () => {
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
        <button className={styles['login-submit-button']}>Log In</button>
      </fieldset>
    </section>
  );
};
