import express, { Express } from 'express';
import cors from 'cors';

import { AppRouter, routers } from './router';

import { connectDB } from './utils/db/connectDB';

const app: Express = express();
const PORT = 8000;
const DBUrl = 'mongodb+srv://Serhii:0956434953SQL@simple-blog-cluster.xiwlyba.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

routers.map((router: AppRouter) => {
    app.use(router.path, router.route);
});

const bootstrap = async () => {
    try {
        await connectDB(DBUrl as string);
        app.listen(PORT, () => {
            console.log(` [🚀 Server]: I am running at http://localhost:${PORT}! \n`);
        });
    } catch (e) {
        if (e instanceof Error) {
            console.error(`[❌ Server error]: ${e.message}`);
        }
    }
};

bootstrap();
