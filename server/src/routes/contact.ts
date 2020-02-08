import * as Router from "koa-router";
import * as mailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { validateBody } from "../middlewares/validate";
import response from "../util/response";
import { telegramNotifier, MessageParser } from "../middlewares/notifier";

const router = new Router({ prefix: "/contact" });
const transporter = mailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true
});
const defaultMessageOptions: Partial<Mail.Options> = {
  to: process.env.EMAIL
};

router.use(validateBody("name", "email", "subject", "text"));

router.post("/email", async ctx => {
  const { email: from, subject } = ctx.request.body;
  await transporter.sendMail({
    ...defaultMessageOptions,
    from,
    subject,
    text: parser(ctx)
  });
  response(ctx, { data: { message: "Email sent" } }, 201);
});

const parser: MessageParser = ctx => {
  const { email, subject, name, text } = ctx.request.body;
  const delim = "\n\n";
  return `From: ${name} - <${email}>${delim}Subject: ${subject}${delim}Message:\n${text}`;
};

router.post("/tg", telegramNotifier(parser), async ctx => {
  response(ctx, { data: { message: "Message sent" } }, 201);
});

export default router.routes();
