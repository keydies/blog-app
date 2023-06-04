import React from 'react';

import Link from 'next/link';

import { Post } from '@app/store/reducers/PostSlice';

import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import styles from './style.module.css';

export const PostList = () => {
  const posts = useTypedSelector((state) => state.postReducer.posts);

  return (
    <section className={styles['post-list']}>
      {posts.map((post: Post, index: number) => (
        <article className={styles['post']} key={index}>
          <h2 className={styles['post-title']}>{post.title}</h2>
          <p className={styles['post-description']}>{post.description}</p>
          <button className={styles['post-button']}>
            <Link className={styles['post-link']} href={`/posts/${index}`}>
              See full post
            </Link>
          </button>
        </article>
      ))}
    </section>
  );
};
