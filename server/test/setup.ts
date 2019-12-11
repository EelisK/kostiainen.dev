import * as supertest from "supertest";
import app from "../src/app";

const realServer = app.listen();

export const server = supertest(realServer);

afterAll(() => realServer.close());
