import { setupApp } from "./core/app.ts";
import { APP_PORT } from "./core/config.ts";

const app = setupApp();

await app.listen({ port: APP_PORT });
