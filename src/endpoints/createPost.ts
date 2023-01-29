import { Request, Response } from "express";
import connection from "../dataBase/connection";
export const createPost = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { photo, description, type, authorId } = req.body
       console.log();
       
 
       const postId: string = Date.now().toString()
 
       await connection("labook_posts")
          .insert({
             id:postId,
             photo,
             description,
             type,
             author_id: authorId
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 }