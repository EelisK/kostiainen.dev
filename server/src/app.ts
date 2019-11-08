import * as koa from "koa";
import * as loggerMiddleware from "koa-logger";
import * as serve from "koa-static";

const app = new koa();
app.use(loggerMiddleware());
app.use(serve(process.env.STATICFILE_DIRECTORY));

export default app;
