export type IComment = {
    postId: number
    id: number
    email: string
    name: string
    body: string
}

export type ISendCommentFromProps = {
    postId: string,
}

export type ICommentListProps = {
    postId: string,
}