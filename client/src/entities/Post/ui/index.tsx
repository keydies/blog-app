import React from 'react';

import { Post } from '@app/store/reducers/PostSlice';

interface PostProps {
  post: Post;
}

export const PostData = ({ post }: PostProps) => {
  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <article>{post.body}</article>
      <h2>Comments: </h2>
      <div>
        <input type="text" />
        <button>Add comment</button>
      </div>
      <div></div>
    </section>
  );
};
