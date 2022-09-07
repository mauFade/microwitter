import { Request, Response } from "express";
import { ICreateTweetDTO } from "./CreateTweetDTO";
import { CreateTweetUseCase } from "./CreateTweetUseCase";

export class CreateTweetController {
  constructor(private tweetService: CreateTweetUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content }: ICreateTweetDTO = request["body"];

    const { userId }: ICreateTweetDTO = Object(request["query"]);

    try {
      const tweet = await this.tweetService.createOne({
        userId: Number(userId),
        content,
        title,
      });

      return response.status(200).send({ success: true, tweet });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
