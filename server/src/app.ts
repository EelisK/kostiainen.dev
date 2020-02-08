import * as dotenv from "dotenv";
import * as koa from "koa";
import * as loggerMiddleware from "koa-logger";
import * as bodyParser from "koa-bodyparser";
import * as serve from "koa-static";
import * as path from "path";

import error from "./middlewares/error";
import contactRoutes from "./routes/contact";

dotenv.config();

if (process.env.NODE_ENV === "production")
  dotenv.config({ path: path.join(__dirname, "../.env.prod") });

const app = new koa();
app.use(bodyParser());
app.use(loggerMiddleware());
app.use(error);
app.use(serve(process.env.STATICFILE_DIRECTORY));
app.use(contactRoutes);

export default app;
