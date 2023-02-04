import { LikeDatabase } from "../data/LikeDatabase";
import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { LikeInputControllerDTO, LikeInputDTO } from "../model/likes";

const likeDatabase = new LikeDatabase();
const userDatabase = new UserDatabase();
const postDatabase = new PostDatabase();

export class LikeBusiness {
  createLike = async (input: LikeInputControllerDTO): Promise<void> => {
    try {
      const { postId, authorId } = input;

      if (!postId || !authorId) {
        throw new Error("Fill in the postId, authorId.");
      }

      const queryUser = await userDatabase.findUser();
      const queryPost = await postDatabase.findPost(postId);
      const existPost = queryPost.findIndex((post) => {
        return post.id === postId;
      });

      if (existPost === -1) {
        throw new Error("Post id does not exist.");
      }

      const existauthorId = queryUser.findIndex((user) => {
        return user.id === authorId;
      });

      if (existauthorId === -1) {
        throw new Error("User id does not exist.");
      }

      const queryResult: LikeInputDTO[] = await likeDatabase.findLike(input);
            
      const existLike = queryResult.findIndex((like) => {
        return like.post_id === postId;
      });

      if (existLike !== -1) {
        throw new Error("You already liked this post!");
      }


      const id: string = Date.now().toString();
            
      await likeDatabase.insertLike({
        id,
        postId,
        authorId,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findLike = () => {};

  deleteLike = async (input: LikeInputControllerDTO): Promise<void> => {
    try {
      const { postId, authorId } = input;
            
      if (!postId || !authorId) {
        throw new Error("Fill in the postId, authorId");
      }

      const queryUser = await userDatabase.findUser();
      const queryPost = await postDatabase.findPost(postId);
      
      const existPost = queryPost.findIndex((post) => {
        return post.id === postId;
      });

      if (existPost === -1) {
        throw new Error("Post id does not exist.");
      }

      const existauthorId = queryUser.findIndex((user) => {
        return user.id === authorId;
      });

      if (existauthorId === -1) {
        throw new Error("User id does not exist.");
      }
        
      const queryResult: LikeInputDTO[] = await likeDatabase.findLike(input);
            
      const existLike = queryResult.findIndex((like) => {
        return like.post_id === postId;
      });

      if (existLike === -1) {
        throw new Error("You didn't like this post!");
      }

      const idLike:string = queryResult[0].id

      await likeDatabase.deleteLike(idLike);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
