import { Request, Response } from "express";
import connection from "../dataBase/connection";
import { TFriends } from "../models/friends";
import { TFriendship } from "../models/Friendship";
import { TUser } from "../models/User";
export const getFriendships = async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { id } = req.params;

    if (!id) {
      res.statusCode = 404;
      message = "id obrigation";
      throw new Error(message);
    }

    const queryResult: TFriendship[] = await connection("labook_friendship")
      .select("*")
      .where({ author_id: id });

    if (!queryResult[0]) {
      res.statusCode = 404;
      message = "friendship not found";
      throw new Error(message);
    }

    let friends:TFriends[] = [];
    for (let i = 0; i < queryResult.length; i++) {
      const queryUser:TUser[] = await connection("labook_users")
        .select("*")
        .where({ id: queryResult[i].friend_id });
      
      if (!queryUser[0]) {
        res.statusCode = 404;
        message = "friendship not found";
        throw new Error(message);
      } else {
        friends.push({
          friend_id: queryUser[0].id,
          name: queryUser[0].name,
        });
      }
    }

    res.status(200).send({ message, friends });
  } catch (error: any) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;
    res.send({ message });
  }
};
