import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Post } from '@app/store/reducers/PostSlice';

import { CommentBody } from '@entities/Post/types/Comment';
import { CommentLabels } from '@entities/Post/types/CommentLables';

import { RouteNames } from '@shared/enums/RouteNames';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import axios from 'axios';

import styles from './style.module.css';

interface PostProps {
  post: Post;
}

export const PostData = ({ post }: PostProps) => {
  const { push } = useRouter();
  const userData = useTypedSelector((state) => state.userReducer.userData);
  const [comment, setComment] = useState<CommentBody>({
    userId: userData._id!,
    postId: post._id!,
    body: '',
  });

  const onCommnetFieldChangeHandler = (field: string, value: string) => {
    setComment((prevState: CommentBody) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onAddCommentHandler = async () => {
    const newComment = await axios.post('http://localhost:8000/posts/add-comment', {
      ...comment,
    });
    push(RouteNames.HOME);
  };

  return (
    <section className={styles['post']}>
      <div className={styles['post-wrapper']}>
        <h2 className={styles['post-title']}>{post.title}</h2>
        <p className={styles['post-description']}>{post.description}</p>
        <article className={styles['post-body']}>{post.body}</article>
        <h2 className={styles['post-comments-title']}>Comments:</h2>
        <div className={styles['post-new-comment']}>
          <input
            className={styles['post-new-comment-input']}
            type="text"
            name="comment"
            placeholder="Your comment..."
            value={comment.body}
            onChange={(e) => onCommnetFieldChangeHandler(CommentLabels.BODY, e.target.value)}
          />
          <button className={styles['post-new-comment-button']} onClick={onAddCommentHandler}>
            Add comment
          </button>
        </div>
        <div className={styles['comments']}>
          {post.comments.map((comment, index) => (
            <div className={styles['comment']} key={index}>
              <h4 className={styles['comment-title']}>{comment.author}</h4>
              <p className={styles['comment-body']}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
