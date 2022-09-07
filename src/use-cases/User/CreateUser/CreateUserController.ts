import { Request, Response } from "express";
import { ICreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private userService: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, country, password }: ICreateUserDTO = request["body"];

    try {
      const user = await this.userService.createOne({
        name,
        email,
        country,
        password,
      });

      return response.status(200).send({ success: true, user });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
