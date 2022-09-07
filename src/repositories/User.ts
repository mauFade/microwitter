import { ICreateUserDTO } from "../use-cases/User/CreateUser/CreateUserDTO";

export interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<any>;
  fetch: () => Promise<any>;
}
