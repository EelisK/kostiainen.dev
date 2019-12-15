import * as Router from "koa-router";
import * as mailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { validateBody } from "../middlewares/validate";
import response from "../util/response";

const router = new Router({ prefix: "/email" });
const transporter = mailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true
});
const defaultMessageOptions: Partial<Mail.Options> = {
  to: process.env.EMAIL
};

router.post("/", validateBody("from", "subject", "text"), async ctx => {
  const { from, subject, text } = ctx.request.body;
  await transporter.sendMail({
    ...defaultMessageOptions,
    from,
    subject,
    text
  });
  response(ctx, { data: { message: "Email sent" } }, 201);
});

export default router.routes();
