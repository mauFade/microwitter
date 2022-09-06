import { prisma } from "../../services/prisma";
import { IUserRepository } from "../User";

export class PrismaUserRepository implements IUserRepository {
  async fetch() {
    const users = await prisma.user.findMany();

    return users;
  }
}
