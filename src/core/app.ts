import { Application, Router } from "../../deps.ts";
import { setupLogger } from "./logger.ts";
import { requestLogger } from "./middlewares/requestLogger.ts";

export const setupApp = () => {
  const app = new Application();
  setupLogger();

  app.use(requestLogger);

  const router = new Router();
  router
    .get("/", ({ response }) => {
      response.body = { message: "Hello world!" };
    });

  app.use(router.routes());

  return app;
};
