import { Router } from "express";
import { createTweetController } from "./use-cases/Tweet/CreateTweet";
import { createUserController } from "./use-cases/User/CreateUser";
import { fetchUsersController } from "./use-cases/User/FetchAllUsers";

const router = Router();

router.post("/api/v1/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/api/v1/users", (request, response) => {
  return fetchUsersController.handle(request, response);
});

// Tweets
router.post("/api/v1/tweets", (request, response) => {
  return createTweetController.handle(request, response);
});

export { router };
