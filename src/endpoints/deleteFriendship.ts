import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { TFriendship } from "../models/Friendship";
export const deleteFriendships = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { id } = req.params
       const {friend} = req.body
 
       const queryResult: TFriendship[] = await connection("labook_friendship")
          .select("*")
          .where({ author_id: id, friend_id: friend })
        
 
       if (!queryResult[0]) {
          res.statusCode = 404
          message = "friend not found"
          throw new Error(message)
       }

       const queryDelete: any = await connection("labook_friendship")
       .where({ author_id: id, friend_id: friend })
       .del()
  
       res.status(200).send({ message })
 
    } catch (error:any) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
 }