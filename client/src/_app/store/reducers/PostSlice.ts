import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  title: string;
  description: string;
  body: string;
}

interface PostState {
  newPost: Post;
  posts: Post[];
}

const initialState: PostState = {
  newPost: {
    title: '',
    description: '',
    body: '',
  },
  posts: [],
};

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setNewPost(state, action: PayloadAction<Post>) {
      state.newPost = action.payload;
      state.posts.push(action.payload);
    },
  },
});

export const postReducer = PostSlice.reducer;
