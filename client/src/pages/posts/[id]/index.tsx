import { NextPage } from 'next/types';

import { PostData } from '@entities/Post/ui';

import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import styles from './style.module.css';

const PostDetails: NextPage = (): JSX.Element => {
  const posts = useTypedSelector((state) => state.postReducer.posts);
  const currentPost = posts[0];
  return (
    <section className={styles['create-new-post-wrapper']}>
      <PostData post={currentPost} />
    </section>
  );
};

export default PostDetails;
