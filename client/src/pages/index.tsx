import { NextPage } from 'next/types';

import { PostList } from '@entities/PostList/ui';

import styles from './style.module.css';

const Home: NextPage = (): JSX.Element => {
  return (
    <main className={styles['posts-wrapper']}>
      <h2 className={styles['posts-title']}>Interesting posts:</h2>
      <PostList />
    </main>
  );
};

export default Home;
