import * as dotenv from "dotenv";
import * as koa from "koa";
import * as loggerMiddleware from "koa-logger";
import * as bodyParser from "koa-bodyparser";
import * as serve from "koa-static";

import error from "./middlewares/error";
import emailRoutes from "./routes/email";

dotenv.config();

const app = new koa();
app.use(bodyParser());
app.use(loggerMiddleware());
app.use(error);
app.use(serve(process.env.STATICFILE_DIRECTORY));
app.use(emailRoutes);

export default app;
