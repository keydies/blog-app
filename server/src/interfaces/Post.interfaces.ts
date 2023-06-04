export interface PostComment {
    author: string;
    body: string;
}

export interface PostBody {
    _id?: string;
    title: string;
    description: string;
    body: string;
    comments: Array<PostComment>;
}

export interface CommentBody {
    postId: string;
    userId: string;
    body: string;
}
