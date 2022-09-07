import { prisma } from "../../services/prisma";
import { ICreateTweetDTO } from "../../use-cases/Tweet/CreateTweet/CreateTweetDTO";
import { ITweetRepository } from "../Tweet";

export class PrismaTweetRepository implements ITweetRepository {
  async create({ userId, title, content }: ICreateTweetDTO) {
    const tweet = await prisma.tweet.create({
      data: {
        userId,
        title,
        content,
      },
    });

    return tweet;
  }
}
