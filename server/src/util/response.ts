import { Context } from "koa";

export default (ctx: Context, body: any, status = 200) => {
  ctx.response.body = body;
  ctx.response.status = status;
};
