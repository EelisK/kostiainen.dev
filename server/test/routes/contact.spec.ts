import { server } from "../setup";
import * as Mail from "nodemailer/lib/mailer";
import * as tg from "node-telegram-bot-api";

describe.each(["/contact/email", "/contact/tg"])("POST %s", path => {
  beforeAll(() => {
    jest.spyOn(Mail.prototype, "sendMail").mockImplementation(jest.fn());
    jest.spyOn(tg.prototype, "sendMessage").mockImplementation(jest.fn());
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("with invalid request body", () => {
    it.each([
      {},
      { from: "foo@bar.baz" },
      { from: "foo@bar.baz", text: "Hello" },
      { asd: "qwert" }
    ])("returns 422", body =>
      server
        .post(path)
        .send(body)
        .expect(422)
    );

    describe("with valid request body", () => {
      it("returns 201", () =>
        server
          .post(path)
          .send({
            email: "foo@bar.baz",
            name: "Slim Shady",
            subject: "Test",
            text: "Testing. Attention please."
          })
          .expect(201));
    });
  });
});
