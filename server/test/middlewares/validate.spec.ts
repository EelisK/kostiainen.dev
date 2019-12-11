import * as validate from "../../src/middlewares/validate";
import HttpError from "../../src/errors/HttpError";

describe("util/validate", () => {
  let next: any;
  let ctx: any;

  beforeEach(() => {
    next = jest.fn();
    ctx = {
      request: { query: {}, body: {} }
    };
  });

  describe("validateQuery", () => {
    it("throws an error when required parameters are not present", () => {
      expect(
        validate.validateQuery("foo", "bar", "baz")(ctx, next)
      ).rejects.toThrow(HttpError);
    });

    it("continues execution when required parameters are present", () => {
      ctx.request.query = { foo: "bar" };
      validate.validateQuery("foo")(ctx, next);
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe("validateBody", () => {
    it("throws an error when required parameters are not present", () => {
      expect(
        validate.validateBody("foo", "bar", "baz")(ctx, next)
      ).rejects.toThrow(HttpError);
    });

    it("continues execution when required parameters are present", () => {
      ctx.request.body = { foo: "bar" };
      validate.validateBody("foo")(ctx, next);
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
});
