import { Router } from 'express';
import PostController from '../controllers/Post.controller';

const router = Router();

router.post('/add-post', PostController.addPost);
router.get('/get-posts', PostController.getPosts);
router.post('/add-comment', PostController.addComment);

export default router;
