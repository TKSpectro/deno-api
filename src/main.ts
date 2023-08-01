import { setupApp } from "./core/app.ts";
import { APP_PORT } from "./core/config.ts";

const app = await setupApp();

await app.listen({ port: APP_PORT });
