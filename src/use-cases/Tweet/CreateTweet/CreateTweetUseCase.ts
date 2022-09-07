import { Tweet } from "../../../entities/Tweet";
import { ITweetRepository } from "../../../repositories/Tweet";
import { ICreateTweetDTO } from "./CreateTweetDTO";

export class CreateTweetUseCase {
  constructor(private tweetRepository: ITweetRepository) {}

  async createOne({ userId, content, title }: ICreateTweetDTO) {
    if (!userId || !content || !title) {
      throw new Error("All is required for tweet creation.");
    }

    const tweet = new Tweet({ userId, content, title });

    const data = await this.tweetRepository.create(tweet);

    return data;
  }
}
