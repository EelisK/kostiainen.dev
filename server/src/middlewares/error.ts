import { Middleware } from "koa";
import HttpError from "../errors/HttpError";
import response from "../util/response";

const errorToJson = (err: Error) => ({
  error: {
    name: err.message,
    message: err.message,
    stack: err.stack
  }
});

const error: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof HttpError) response(ctx, errorToJson(err), err.status);
    else response(ctx, errorToJson(err), 500);
  }
};

export default error;
