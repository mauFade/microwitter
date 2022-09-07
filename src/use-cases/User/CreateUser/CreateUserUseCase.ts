import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/User";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private createUserRepository: IUserRepository) {}

  async createOne({ name, email, country, password }: ICreateUserDTO) {
    if (!name || !email || !password || !country) {
      throw new Error("All data is required for creation.");
    }

    const user = new User({ name, email, country, password });

    return user;
  }
}
