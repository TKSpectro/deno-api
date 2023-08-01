import express from "npm:express@4.18.2";
import { Request, Response } from "../../deps.ts";
import { setupLogger } from "./logger.ts";
import { requestLogger } from "./middlewares/requestLogger.ts";

export const setupApp = () => {
  const app = express();
  setupLogger();

  app.use(requestLogger);

  // const router = new Router();
  // router
  //   .get("/", ({ response }) => {
  //     response.body = "Hello world!";
  //   });

  // app.use(router.routes());

  app.get("/", (_req: Request, res: Response) => {
    res.send({ message: "Hello world!" });
  });

  return app;
};
