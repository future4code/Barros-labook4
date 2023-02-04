import express from "express";

import { LikeController } from "../LikeController";

export const likeRouter = express.Router()

const likeController = new LikeController();

likeRouter.post('/create',likeController.createLike);
likeRouter.delete('/',likeController.deleteLike);

