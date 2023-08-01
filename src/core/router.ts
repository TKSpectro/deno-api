import { Router } from "../../deps.ts";

const accountsRouter = new Router({ prefix: "/accounts" });
accountsRouter
  .get("/", ({ response }) => {
    response.body = { message: "Hello accounts!" };
  });

export const appRouter = new Router();
appRouter
  .get("/", ({ response }) => {
    response.body = { message: "Hello world!" };
  })
  .use(accountsRouter.routes());
