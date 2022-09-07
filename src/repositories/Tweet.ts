import { Tweet } from "../entities/Tweet";
import { ICreateTweetDTO } from "../use-cases/Tweet/CreateTweet/CreateTweetDTO";

export interface ITweetRepository {
  create: (data: ICreateTweetDTO) => Promise<Tweet>;
}
