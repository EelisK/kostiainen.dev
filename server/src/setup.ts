import * as dotenv from "dotenv";
import * as path from "path";
import logger from "./logger";

export default (): any => {
  dotenv.config();
  switch (process.env.NODE_ENV) {
    case "development":
      return;
    case "test":
      return dotenv.config({ path: path.join(__dirname, "../.env.test") });
    case "production":
      return dotenv.config({ path: path.join(__dirname, "../.env.prod") });
    default:
      logger.warn(`No environment config for ${process.env.NODE_ENV}`);
      return;
  }
};
