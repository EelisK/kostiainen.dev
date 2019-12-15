import { Middleware } from "koa";
import HttpError from "../errors/HttpError";
import isDefined from "../util/isDefined";

const objectContainsRequiredFields = (
  object: Record<string, any>,
  requiredFields: string[]
) => requiredFields.map(x => object[x]).every(isDefined);

export const validateQuery = (
  ...requiredFields: string[]
): Middleware => async (ctx, next) => {
  if (objectContainsRequiredFields(ctx.request.query, requiredFields))
    await next();
  else
    throw new HttpError(
      `Missing some of the following query parameters: ${requiredFields.join(
        ","
      )}`,
      422
    );
};

export const validateBody = (...requiredFields: string[]): Middleware => async (
  ctx,
  next
) => {
  if (objectContainsRequiredFields(ctx.request.body, requiredFields))
    await next();
  else
    throw new HttpError(
      `Missing some of the following body parameters: ${requiredFields.join(
        ","
      )}`,
      422
    );
};
