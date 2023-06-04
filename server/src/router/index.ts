import { Router as ExpressRouter } from 'express';

import authRouter from './auth.router';
import userRouter from './user.router';
import postRouter from './post.router';

export interface AppRouter {
    route: ExpressRouter;
    path: string;
}

export const routers = [
    {
        route: authRouter,
        path: '/auth',
    },
    {
        route: userRouter,
        path: '/user',
    },
    {
        route: postRouter,
        path: '/posts',
    },
] as AppRouter[];
