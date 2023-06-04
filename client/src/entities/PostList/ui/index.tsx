import React, { useEffect } from 'react';

import Link from 'next/link';

import { Post, PostSlice } from '@app/store/reducers/PostSlice';

import { RouteNames } from '@shared/enums/RouteNames';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import axios from 'axios';

import styles from './style.module.css';

export const PostList = () => {
  const posts = useTypedSelector((state) => state.postReducer.posts);
  const isAuth = useTypedSelector((state) => state.userReducer.isAuth);
  const { setPosts } = PostSlice.actions;
  const dispatch = useTypedDispatch();

  const onGetPostsHandler = async () => {
    const posts = await axios.get('http://localhost:8000/posts/get-posts').then((responce) => responce.data);
    dispatch(setPosts(posts as unknown as Post[]));
  };

  useEffect(() => {
    onGetPostsHandler();
  }, []);

  return (
    <section className={styles['post-list']}>
      {posts.map((post: Post, index: number) => (
        <article className={styles['post']} key={index}>
          <h2 className={styles['post-title']}>{post.title}</h2>
          <p className={styles['post-description']}>{post.description}</p>
          <button className={styles['post-button']}>
            <Link className={styles['post-link']} href={isAuth ? `/posts/${index}` : RouteNames.SIGNUP}>
              See full post
            </Link>
          </button>
        </article>
      ))}
    </section>
  );
};
