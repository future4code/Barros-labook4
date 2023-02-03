export interface LikeInputDTO{
    id: string,
    post_id: string,
    author_id: string

}
export interface LikeInputDataDTO{
    id: string,
    postId: string,
    authorId: string
}
export interface LikeInputControllerDTO{
    postId: string,
    authorId: string
}
export interface DeleteLikeInputDTO{
    id: string,
    
}