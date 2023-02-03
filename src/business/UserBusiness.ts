import { UserDatabase } from "../data/UserDatabase";
import { InputControllerDTO } from "../model/User";

export class UserBusiness {
  createUser = async (input: InputControllerDTO): Promise<void> => {
    try {
      const { name, email, password } = input;

      const userDatabase = new UserDatabase();

      if (!name || !email || !password) {
        throw new Error(
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (password.length < 6) {
        throw new Error("Senha muito curta");
      }

      const userBase = await userDatabase.findUser();
      const existUser = userBase.findIndex((user)=>user.email === email)
      
      if(existUser != -1) {
        throw new Error("Usuário já cadastrado ");
      }
      const id: string = Date.now().toString();

      
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error:any) {
        throw new Error(error.message)
    }
  };

  findUser = () => {};
  deleteUser = () => {};
}