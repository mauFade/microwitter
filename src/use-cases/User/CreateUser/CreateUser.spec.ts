import { CreateUserUseCase } from "./CreateUserUseCase";

const createSpy = jest.fn();
const fetchSpy = jest.fn();

describe("Create a user tests", () => {
  const create = new CreateUserUseCase({ fetch: fetchSpy, create: createSpy });

  it("Should create a user", async () => {
    await expect(
      create.createOne({
        name: "Any",
        email: "any@email.com",
        country: "Brasil",
        password: "any123",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw a error", async () => {
    expect(
      create.createOne({
        name: "",
        email: "any@email.com",
        country: "Brasil",
        password: "any123",
      })
    ).rejects.toThrow();
  });
});
