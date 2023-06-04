import { Request, Response } from 'express';
import { ErrorResponse } from '../interfaces/Error.interfaces';
import { HttpStatusCode } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';
import { PostBody } from '../interfaces/Post.interfaces';
import PostService from '../services/Post.service';

class UserContoller {
    async addPost(req: Request, res: Response) {
        try {
            const postData: PostBody = req.body;

            const post: PostBody | ErrorResponse = await PostService.addPost(postData);

            return res.status(HttpStatusCode.OK).json(post);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
    async getPosts(req: Request, res: Response) {
        try {
            const posts: PostBody | ErrorResponse = await PostService.getPosts();

            return res.status(HttpStatusCode.OK).json(posts);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
    async addComment(req: Request, res: Response) {
        try {
            const post: PostBody | ErrorResponse = await PostService.addComment(req.body);

            return res.status(HttpStatusCode.OK).json(post);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
}

export default new UserContoller();
