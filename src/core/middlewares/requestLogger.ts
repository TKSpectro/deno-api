import { logger, NextFunction, Request, Response } from "../../../deps.ts";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Log the request after it has been handled
  // @ts-expect-error Express does not define this property
  res.on("finish", () => {
    let logString =
      // @ts-expect-error Express does not define res.statusCode
      `[Request] ${req.method} ${req.path} | ${res.statusCode}`;

    if (req.body) {
      logString += ` | ${JSON.stringify(req.body)}`;
    }

    logger.info(logString);
  });

  next();
};
