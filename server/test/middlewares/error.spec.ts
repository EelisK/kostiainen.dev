import error from "../../src/middlewares/error";
import HttpError from "../../src/errors/HttpError";

fdescribe("middlewares/error", () => {
  let ctx: any;
  beforeEach(() => {
    ctx = {
      response: {}
    };
  });
  it("it catches exceptions thrown by the server", () => {
    expect(() =>
      error(ctx, async () => {
        throw new Error("This fails");
      })
    ).not.toThrow();
  });

  it("sets custom status code when error is HttpError", () => {
    error(ctx, () => {
      throw new HttpError("Unauthorized", 401);
    });
    expect(ctx.response.status).toEqual(401);
  });

  it("sets status code to 500 if error is unknown", () => {
    error(ctx, () => {
      throw new Error("This is not an HttpError");
    });
    expect(ctx.response.status).toEqual(500);
  });
});
