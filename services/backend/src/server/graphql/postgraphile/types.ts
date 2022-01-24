import { client } from "db";

export type Context = {
  pgClient: typeof client;
};
