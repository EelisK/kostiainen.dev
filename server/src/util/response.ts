import * as router from "koa-router";

export type ResponseFunction = (
  ctx: router.IRouterContext,
  body: any,
  status?: number
) => void;

const response: ResponseFunction = (ctx, body, status = 200) => {
  ctx.response.status = status;
  ctx.response.body = body;
};

export const json: ResponseFunction = (ctx, body, status) => {
  ctx.response.set("Content-Type", "application/json");
  response(ctx, body, status);
};
