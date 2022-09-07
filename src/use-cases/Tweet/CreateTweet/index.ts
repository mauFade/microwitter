import { PrismaTweetRepository } from "../../../repositories/prisma/PrismaTweetRepository";
import { CreateTweetController } from "./CreateTweetController";
import { CreateTweetUseCase } from "./CreateTweetUseCase";

const prismaRepository = new PrismaTweetRepository();

const tweetService = new CreateTweetUseCase(prismaRepository);

export const createTweetController = new CreateTweetController(tweetService);
