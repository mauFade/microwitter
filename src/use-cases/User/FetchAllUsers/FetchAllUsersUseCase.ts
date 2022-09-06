import { IUserRepository } from "../../../repositories/User";

export class FecthAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async fetchAllUsers() {
    const users = await this.userRepository.fetch();

    return users;
  }
}
