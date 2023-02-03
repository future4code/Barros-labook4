import { Request, Response } from "express";
import { CommentsBusiness} from "../business/CommentsBusiness";
import { InputCommentControllerDTO } from "../model/Comments";

export class CommentController {
  createComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: InputCommentControllerDTO = {
        comment: req.body.comment,
        postId: req.body.postId,
        authorId: req.body.authorId
      };      

      const commentBusiness = new CommentsBusiness()
      await commentBusiness.createComment(input)

      res.status(201).send({ message: "Comment create!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  findComment = () => {};
  deleteComment = () => {};
}