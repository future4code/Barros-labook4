import { CommentDatabase } from "../data/CommentsDatabase";
import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { InputCommentControllerDTO } from "../model/Comments";
const commentDatabase = new CommentDatabase();
const userDatabase = new UserDatabase();
const postDatabase = new PostDatabase();

export class CommentsBusiness {
  createComment = async (input: InputCommentControllerDTO): Promise<void> => {
    try {
      const { comment, postId, authorId } = input;


      if (!comment || !postId || !authorId) {
        throw new Error(
          'Fill in the fields "comment", "postId" and "authorId"'
        );
      }

      const userBase = await userDatabase.findUser();
      const existUser = userBase.findIndex((user)=>user.id === authorId);
      
      if(existUser === -1) {
        throw new Error("User not exist.");
      }
      const postBase = await postDatabase.findPost(postId);
      const existPost = postBase.findIndex((post)=>post.id === postId);
      
      if(existPost === -1) {
        throw new Error("Post not exist.");
      }

      const id: string = Date.now().toString();

      
      await commentDatabase.insertcomment({
        id,
        comment,
        postId,
        authorId,
      });
    } catch (error:any) {
        throw new Error(error.message)
    }
  };

  findComment = () => {};
  deleteComment = () => {};
}