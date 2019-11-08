import * as koa from "koa";
import * as loggerMiddleware from "koa-logger";

const app = new koa();
app.use(loggerMiddleware());

export default app;
