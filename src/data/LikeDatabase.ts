import { BaseDatabase } from "./BaseDatabase";
import { LikeInputControllerDTO, LikeInputDataDTO, LikeInputDTO } from "../model/likes";

export class LikeDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_likes";
  insertLike = async (input: LikeInputDataDTO): Promise<void> => {
    try {
      await LikeDatabase.connection
        .insert({
          id: input.id,
          post_id: input.postId,
          author_id: input.authorId,
        })
        .into(LikeDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findLike = async (input: LikeInputControllerDTO): Promise<LikeInputDTO[]> => {
    try {

      const {postId,authorId}= input;
      
      const result = await LikeDatabase.connection
        .select("*")
        .from(LikeDatabase.TABLE_NAME)
        .where({ post_id: postId, author_id: authorId });

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  deleteLike = async (input: string): Promise<void> => {
    try {
      await LikeDatabase.connection
        .from(LikeDatabase.TABLE_NAME)
        .where({ id: input })
        .delete();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
