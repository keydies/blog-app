import { NextPage } from 'next/types';

import { CreatePost } from '@features/CreatePost/ui';

import styles from './style.module.css';

const CreateNewPost: NextPage = (): JSX.Element => {
  return (
    <section className={styles['create-new-post-wrapper']}>
      <CreatePost />
    </section>
  );
};

export default CreateNewPost;
