import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaRepository = new PrismaUserRepository();

const userService = new CreateUserUseCase(prismaRepository);

export const createUserController = new CreateUserController(userService);
