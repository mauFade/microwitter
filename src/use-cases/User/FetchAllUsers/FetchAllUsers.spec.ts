import { FecthAllUsersUseCase } from "./FetchAllUsersUseCase";

const createSpy = jest.fn();
const fecthSpy = jest.fn();

describe("Fetch users tests", () => {
  const fetch = new FecthAllUsersUseCase({
    fetch: fecthSpy,
    create: createSpy,
  });

  it("Should return all users", async () => {
    await expect(fetch.fetchAllUsers()).resolves.not.toThrow();
  });
});
