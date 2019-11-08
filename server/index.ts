import app from "./src/app";
import logger from "./src/logger";

const PORT = process.env.PORT || 8080;

const server = app.listen();
logger.info(`App starting in ${PORT}`);

const terminator = (code = 0) => async () => {
  logger.info(`Terminating process ${code}`);
  await new Promise((resolve, reject) =>
    server.close(err => {
      if (err) reject(err);
      else resolve();
    })
  );
  process.exit(code);
};
process.on("uncaughtException", terminator(1));
process.on("unhandledRejection", terminator(1));
process.on("SIGINT", terminator());
process.on("SIGTERM", terminator());
