import React from 'react';

import { NextPage } from 'next';

import { SignUpForm } from '@features/SignUpForm/ui';

import styles from './style.module.css';

const SignIn: NextPage = () => {
  return (
    <section className={styles['sign-up-wrapper']}>
      <SignUpForm />
    </section>
  );
};

export default SignIn;
