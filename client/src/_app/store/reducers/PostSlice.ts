import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Comment {
  author: string;
  body: string;
}
export interface Post {
  _id?: string;
  title: string;
  description: string;
  body: string;
  comments: Array<Comment>;
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
    comments: [],
  },
  posts: [],
};

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setNewPost(state, action: PayloadAction<Post>) {
      state.newPost = action.payload;
    },
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
  },
});

export const postReducer = PostSlice.reducer;
