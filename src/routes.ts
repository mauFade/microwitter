import { Router } from "express";
import { createUserController } from "./use-cases/User/CreateUser";
import { fetchUsersController } from "./use-cases/User/FetchAllUsers";

const router = Router();

router.post("/api/v1/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/api/v1/users", (request, response) => {
  return fetchUsersController.handle(request, response);
});

export { router };
