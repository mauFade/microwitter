import { Request, Response } from "express";
import { ICreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

import bcrypt from "bcrypt";

export class CreateUserController {
  constructor(private userService: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, country, password }: ICreateUserDTO = request["body"];

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
      const user = await this.userService.createOne({
        name,
        email,
        country,
        password: hashedPassword,
      });

      return response.status(200).send({ success: true, user });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
