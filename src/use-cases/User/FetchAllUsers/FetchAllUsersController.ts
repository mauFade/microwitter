import { Request, Response } from "express";
import { FecthAllUsersUseCase } from "./FetchAllUsersUseCase";

export class FetchAllUsersController {
  constructor(private userService: FecthAllUsersUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    const users = await this.userService.fetchAllUsers();

    return response.status(200).send({ success: true, users });
  }
}
