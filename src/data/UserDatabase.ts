import { BaseDatabase } from "./BaseDatabase";
import { UserDTO } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";
  insertUser = async (user: UserDTO): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findUser = async (): Promise<UserDTO[]> => {
    try {
      const users: UserDTO[] = [];

      const result = await UserDatabase.connection
        .select("*")
        .from(UserDatabase.TABLE_NAME);
        

      for (let user of result) {
        users.push(user);
      }

      return users;

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  deleteUser = () => {};
}
