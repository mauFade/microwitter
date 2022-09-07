export class Tweet {
  public readonly id?: number;

  public readonly userId: number;
  public title: string;
  public content: string;

  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: Omit<Tweet, "id">) {
    Object.assign(this, props);
  }
}
