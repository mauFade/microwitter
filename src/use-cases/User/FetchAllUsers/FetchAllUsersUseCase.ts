import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/User";

export class FecthAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async fetchAllUsers() {
    const users: User = await this.userRepository.fetch();

    return users;
  }
}
