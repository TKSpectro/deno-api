import { logger, Middleware } from "../../../deps.ts";

export const requestLogger: Middleware = async ({
  request: req,
  response: res,
}, next) => {
  await next();
  let logString = `[Request] ${req.method} ${req.url} | ${res.status}`;

  if (req.hasBody) {
    logString += ` | ${JSON.stringify(req.body)}`;
  }

  logger.info(logString);
};
