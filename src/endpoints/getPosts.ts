import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { TPost } from "../models/Posts";
export const getPost = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { id } = req.params
 
       const queryResult: any = await connection("labook_posts")
          .select("*")
          .where({ author_id: id })
        
 
       if (!queryResult[0]) {
          res.statusCode = 404
          message = "Post not found"
          throw new Error(message)
       }
 
       const post: TPost = {
          id: queryResult[0].id,
          photo: queryResult[0].photo,
          description: queryResult[0].description,
          type: queryResult[0].type,
          createdAt: queryResult[0].created_at,
          authorId: queryResult[0].author_id,
       }
 
       res.status(200).send({ message, post })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 }