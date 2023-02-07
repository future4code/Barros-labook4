import { BaseDatabase } from "./BaseDatabase";
import { CommentInputBDTO, InputCommentDTO } from "../model/Comments";

export class CommentDatabase extends BaseDatabase {
  private static TABLE_NAME ="labook_comments";
  insertcomment = async (comment: InputCommentDTO): Promise<void> => {
    try {
      await CommentDatabase.connection
        .insert({
          id: comment.id,
          comment: comment.comment,
          post_id: comment.postId,
          author_id: comment.authorId
        })
        .into(CommentDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findcomment = async (input:string): Promise<CommentInputBDTO[]> => {
    try {
      const comments: CommentInputBDTO[] = [];

      const result = await CommentDatabase.connection
        .select("*")
        .from(CommentDatabase.TABLE_NAME)
        .where({input});
        

      for (let comment of result) {
        comments.push(comment);
      }

      return comments;

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  deletecomment = () => {};
}
