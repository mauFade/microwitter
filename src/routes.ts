import { Router } from "express";
import { fetchUsersController } from "./use-cases/User/FetchAllUsers";

const router = Router();

router.get("/api/v1/users", (request, response) => {
  return fetchUsersController.handle(request, response);
});

export { router };
