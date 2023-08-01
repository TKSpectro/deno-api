import { logger, Middleware } from "../../../deps.ts";

export const requestLogger: Middleware = async (
  { request, response },
  next,
) => {
  // Log the request after it has been handled
  await next();
  logger.info(`${request.method} "${request.url}" | ${response.status}`);
};
