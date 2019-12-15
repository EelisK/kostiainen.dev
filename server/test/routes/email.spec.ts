import { server } from "../setup";

jest.mock("nodemailer", () => ({
  ...jest.requireActual("nodemailer"),
  createTransport: () => ({ sendMail: jest.fn() })
}));

describe("POST /email", () => {
  describe("with invalid request body", () => {
    it("returns 422", () => {
      return Promise.all(
        [
          {},
          { from: "foo@bar.baz" },
          { from: "foo@bar.baz", text: "Hello" },
          { asd: "qwert" }
        ].map(body =>
          server
            .post("/email")
            .send(body)
            .expect(422)
        )
      );
    });

    describe("with valid request body", () => {
      it("returns 201", () => {
        const body = { from: "foo@bar.baz", subject: "Hello", text: "Hello" };
        return server
          .post("/email")
          .send(body)
          .expect(201);
      });
    });
  });
});
