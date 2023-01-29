import { Request, Response } from "express";
import connection from "../dataBase/connection";
export const createFriendship = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { friend, authorId } = req.body
       console.log();
       
 
       const friendship: string = Date.now().toString()
 
       await connection("labook_friendship")
          .insert({
             id:friendship,
             friend_id: friend,
             author_id: authorId
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 }