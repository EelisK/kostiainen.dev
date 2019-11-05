import app from "./src/app";

const server = app.listen(process.env.PORT);
const terminator = (code = 0) => async () => {
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
