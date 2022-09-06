import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { FetchAllUsersController } from "./FetchAllUsersController";
import { FecthAllUsersUseCase } from "./FetchAllUsersUseCase";

const prismaRepository = new PrismaUserRepository();

const userService = new FecthAllUsersUseCase(prismaRepository);

export const fetchUsersController = new FetchAllUsersController(userService);
