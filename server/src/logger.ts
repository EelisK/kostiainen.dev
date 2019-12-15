import * as winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

if (process.env.NODE_ENV !== "prduction")
  logger.exceptions.handle(
    new winston.transports.File({ filename: "logs/exceptions.log" })
  );

export default logger;
