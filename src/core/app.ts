import { Application } from "../../deps.ts";
import { db, setupDatabase } from "./db.ts";
import { setupLogger } from "./logger.ts";
import { requestLogger } from "./middlewares/requestLogger.ts";
import { appRouter } from "./router.ts";

export const setupApp = async () => {
  setupLogger();
  await setupDatabase();

  const app = new Application();

  app.use(requestLogger);

  app.use(appRouter.routes());

  return app;
};

export const stopApp = async () => {
  await db.close();
};
