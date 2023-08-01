import { e, Router } from "../../deps.ts";
import { db } from "./db.ts";

const accountsRouter = new Router({ prefix: "/accounts" });
accountsRouter
  .get("/", async ({ response }) => {
    // await e.insert(e.Account, {
    //   name: "test",
    // }).run(db);

    const accounts = await e
      .select(e.Account, () => ({
        name: true,
      }))
      .run(db);

    response.body = { accounts: accounts };
  })
  .post("/", async ({ request, response }) => {
    const { name } = await request.body().value;

    const account = await e.insert(e.Account, {
      name,
    }).run(db);

    response.status = 201;
    response.body = { account: account };
  });

export const appRouter = new Router();
appRouter
  .get("/", ({ response }) => {
    response.body = { message: "Hello world!" };
  })
  .use(accountsRouter.routes());
