import { Application } from "../../deps.ts";
import { setupLogger } from "./logger.ts";
import { requestLogger } from "./middlewares/requestLogger.ts";
import { appRouter } from "./router.ts";

export const setupApp = () => {
  const app = new Application();
  setupLogger();

  app.use(requestLogger);

  app.use(appRouter.routes());

  return app;
};
