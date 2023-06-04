import React from 'react';

import { NextPage } from 'next';

import { SignInForm } from '@features/SignInForm/ui';

import styles from './style.module.css';

const SignIn: NextPage = () => {
  return (
    <section className={styles['sign-in-wrapper']}>
      <SignInForm />
    </section>
  );
};

export default SignIn;
