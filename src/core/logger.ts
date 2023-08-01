import { logger } from "../../deps.ts";

export const setupLogger = () => {
  logger.setup({
    handlers: {
      console: new logger.handlers.ConsoleHandler("DEBUG", {
        formatter: (rec) =>
          JSON.stringify({
            ts: rec.datetime,
            level: rec.levelName,
            data: rec.msg,
          }),
      }),
      // Could also use a rotating file handler
      // file: new logger.handlers.RotatingFileHandler("INFO", {
      //   filename: "./.logs/logger.log",
      //   maxBytes: 1000,
      //   maxBackupCount: 5,
      //   formatter: (rec) =>
      //     JSON.stringify({
      //       ts: rec.datetime,
      //       level: rec.levelName,
      //       data: rec.msg,
      //     }),
      // }),
    },

    loggers: {
      default: {
        level: "DEBUG",
        handlers: ["console"],
      },
    },
  });
};
