import { prisma } from "../../services/prisma";
import { ICreateUserDTO } from "../../use-cases/User/CreateUser/CreateUserDTO";
import { IUserRepository } from "../User";

export class PrismaUserRepository implements IUserRepository {
  async create({ name, email, country, password }: ICreateUserDTO) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        country,
        password,
      },
    });

    return user;
  }

  async fetch() {
    const users = await prisma.user.findMany();

    return users;
  }
}
