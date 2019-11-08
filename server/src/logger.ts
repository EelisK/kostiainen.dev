import * as winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "logs/log.log", level: "log" }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({
      filename: "logs/warning.log",
      level: "warning"
    }),
    new winston.transports.File({ filename: "logs/combined.log" })
  ]
});

logger.exceptions.handle(
  new winston.transports.File({ filename: "logs/exceptions.log" })
);

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export default logger;
