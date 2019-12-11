import response from "../../src/util/response";

describe("util/response", () => {
  let ctx: any;
  beforeEach(() => {
    ctx = {
      response: {}
    };
  });
  it("sets the body of the response", () => {
    const body = { foo: "bar" };
    response(ctx, body);
    expect(ctx.response.body).toMatchObject(body);
  });

  it("sets the status of the response", () => {
    response(ctx, {}, 418);
    expect(ctx.response.status).toEqual(418);
  });

  it("defaults the response status to 200", () => {
    response(ctx, {});
    expect(ctx.response.status).toEqual(200);
  });
});
