import React, { useState } from 'react';

import { PostSlice } from '@app/store/reducers/PostSlice';

import { NewPostFieldLabels } from '@features/CreatePost/types/NewPostFieldLabels';
import { PostData } from '@features/CreatePost/types/PostData';

import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import styles from './style.module.css';

export const CreatePost = () => {
  const dispatch = useTypedDispatch();
  const { setNewPost } = PostSlice.actions;

  const [postData, setPostData] = useState<PostData>({
    title: '',
    description: '',
    body: '',
  });

  const onChangeNewPostFieldHandler = (label: string, value: string) => {
    setPostData((prevState: PostData) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const onCreateNewPostHandler = () => {
    if (postData.title && postData.description && postData.body) {
      dispatch(setNewPost(postData));
      setPostData({ title: '', description: '', body: '' });
      alert('Blog Post posted successfully!');
    }
  };

  return (
    <section className={styles['create-post']}>
      <h2 className={styles['create-post-title']}>Add new post</h2>
      <fieldset className={styles['create-post-field-wrapper']}>
        <label className={styles['create-post-label']} htmlFor="title">
          Title:
        </label>
        <input
          className={styles['create-post-input']}
          type="text"
          id="title"
          name="title"
          value={postData.title}
          onChange={(e) => onChangeNewPostFieldHandler(NewPostFieldLabels.TITLE, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['create-post-field-wrapper']}>
        <label className={styles['create-post-label']} htmlFor="description">
          Description:
        </label>
        <input
          className={styles['create-post-input']}
          type="text"
          id="description"
          name="description"
          value={postData.description}
          onChange={(e) => onChangeNewPostFieldHandler(NewPostFieldLabels.DESCRIPTION, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['create-post-field-wrapper']}>
        <label className={styles['create-post-label']} htmlFor="body">
          Body:
        </label>
        <textarea
          className={styles['create-post-textarea']}
          id="body"
          name="body"
          value={postData.body}
          onChange={(e) => onChangeNewPostFieldHandler(NewPostFieldLabels.BODY, e.target.value)}
        />
      </fieldset>
      <fieldset className={styles['create-post-field-wrapper']}>
        <button className={styles['create-post-button']} onClick={onCreateNewPostHandler}>
          Add post
        </button>
      </fieldset>
    </section>
  );
};
