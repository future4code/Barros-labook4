import { Request, Response } from "express";
import { LikeBusiness } from "../business/LikeBusiness";
import { LikeInputControllerDTO } from "../model/likes";

const likeBusiness = new LikeBusiness();
export class LikeController {
  createLike = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: LikeInputControllerDTO = {
        postId: req.body.postId,
        authorId: req.headers.authorization as string
      };

      await likeBusiness.createLike(input)

      res.status(201).send({ message: "Like success!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  findLike = () => {};

  deleteLike = async(req:Request, res:Response):Promise<void> => {
      try {
        const input: LikeInputControllerDTO = {
          postId: req.body.postId,
          authorId: req.headers.authorization as string
        };
       
        await likeBusiness.deleteLike(input)
        res.status(201).send({ message: "deleted from Like!" });
      } catch (error:any) {
        res.status(400).send(error.message);
      }
  };
}