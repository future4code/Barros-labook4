import express from "express";

import { CommentController } from "../CommentsController";

export const commentsRouter = express.Router()

const commentController = new CommentController();

commentsRouter.post('/', commentController.createComment);

