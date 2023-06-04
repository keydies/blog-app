import mongoose from 'mongoose';

import { PostBody, PostComment } from '../interfaces/Post.interfaces';

const Model = mongoose.Schema;

const PostModel = new Model<PostBody>({
    title: { type: String, required: true, default: '' },
    description: { type: String, required: true, default: '' },
    body: { type: String, required: true, default: '' },
    comments: { type: Array as unknown as PostComment[] },
});

export default mongoose.model('Post', PostModel);
