import * as notifier from "../../src/middlewares/notifier";
import * as tg from "node-telegram-bot-api";

describe("middlewares/notifier", () => {
  let ctx: any;
  let sendMessage: jest.Mock;

  beforeEach(() => {
    ctx = { request: { body: {} } };
    sendMessage = jest.fn();
    jest.spyOn(tg.prototype, "sendMessage").mockImplementation(sendMessage);
  });

  describe("with a custome parser", () => {
    let parser: notifier.MessageParser;
    beforeEach(async () => {
      parser = () => "foobar";
      await notifier.telegramNotifier(parser)(ctx, jest.fn());
    });

    it("notifies with the given format", () => {
      expect(sendMessage).toHaveBeenCalledWith(expect.any(String), "foobar");
    });
  });

  describe("with the default parser", () => {
    beforeEach(async () => {
      ctx.request.body = { foo: "bar" };
      await notifier.telegramNotifier()(ctx, jest.fn());
    });

    it("sends a json response", () => {
      expect(sendMessage).toHaveBeenCalledWith(
        expect.any(String),
        `{"foo":"bar"}`
      );
    });
  });
});
