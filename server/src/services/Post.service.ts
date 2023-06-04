import { ErrorResponse } from '../interfaces/Error.interfaces';
import { CommentBody, PostBody } from '../interfaces/Post.interfaces';
import { UserBody } from '../interfaces/User.interfaces';
import PostModel from '../models/Post.model';
import UserModel from '../models/User.model';
import { HttpMessageResponse, HttpStatusCode } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';

class PostService {
    async addPost(postData: PostBody): Promise<PostBody | ErrorResponse> {
        const { title, description, body } = postData;
        const posts = new PostModel({ title, description, body });
        posts.save();
        return posts;
    }
    async getPosts(): Promise<PostBody | ErrorResponse> {
        const posts = (await PostModel.find()) as unknown as PostBody;
        return posts;
    }
    async addComment(commentData: CommentBody): Promise<PostBody | ErrorResponse> {
        const { body, postId, userId } = commentData;
        const post = await PostModel.findById(postId);
        const user = await UserModel.findById(userId);
        if (post && user) {
            post.comments.push({ body, author: user.userName });
            post.save();
            return post;
        } else {
            return ErrorHandler(HttpStatusCode.FORBIDDEN, HttpMessageResponse.INCORRECT_DATA);
        }
    }
}

export default new PostService();
