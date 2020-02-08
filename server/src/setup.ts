import * as dotenv from "dotenv";
import * as path from "path";

export default (): any => {
  dotenv.config();
  switch (process.env.NODE_ENV) {
    case "development":
      return;
    case "test":
      return dotenv.config({ path: path.join(__dirname, "../.env.test") });
    case "production":
    default:
      return dotenv.config({ path: path.join(__dirname, "../.env.prod") });
  }
};
