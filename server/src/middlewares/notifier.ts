import { Middleware, Context } from "koa";
import * as TelegramBot from "node-telegram-bot-api";
import HttpError from "../errors/HttpError";
import logger from "../logger";

const BOT = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: false });
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export type MessageParser = (ctx: ParameterizedContext) => string;

const DEFAULT_PARSER: MessageParser = ctx => JSON.stringify(ctx.request.body);

export const telegramNotifier = (
  parser: MessageParser = DEFAULT_PARSER
): Middleware => async (ctx, next) => {
  try {
    await BOT.sendMessage(CHAT_ID, parser(ctx));
    return await next();
  } catch (err) {
    logger.log(err);
    throw new HttpError("Failed to send message");
  }
};
