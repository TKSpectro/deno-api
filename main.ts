import { Application, Router } from "./deps.ts";
import { APP_PORT } from "./src/core/config.ts";
import { setupLogger } from "./src/core/logger.ts";
import { requestLogger } from "./src/core/middlewares/requestLogger.ts";

setupLogger();

const app = new Application();

app.use(requestLogger);

const router = new Router();
router
  .get("/", ({ response }) => {
    response.body = "Hello world!";
  });

app.use(router.routes());

await app.listen({ port: APP_PORT });
