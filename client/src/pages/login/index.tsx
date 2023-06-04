import { NextPage } from 'next/types';

import { LoginForm } from '@features/LoginForm/ui';

import styles from './style.module.css';

const Login: NextPage = (): JSX.Element => {
  return (
    <section className={styles['login-wrapper']}>
      <LoginForm />
    </section>
  );
};

export default Login;
