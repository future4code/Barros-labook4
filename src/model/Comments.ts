export interface InputCommentDTO{
    id: string,
    comment: string,
    postId: string,
    authorId: string
 }
 export interface CommentInputBDTO{
    id: string,
    comment: string,
    created_at: Date,
    post_id: string,
    author_id: string
 }
 export interface InputCommentControllerDTO{
    comment: string,
    postId: string,
    authorId: string
 }

 export interface CommentIdDTO{
    id: string,
 }
