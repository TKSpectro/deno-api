import { Application, beforeAll, chai, describe, it } from "../deps.ts";
import { setupApp } from "./core/app.ts";

export function add(a: number, b: number): number {
  return a + b;
}

chai.should();

describe("add", () => {
  let app: Application;
  beforeAll(() => {
    console.log("beforeAll");

    app = setupApp();
  });

  it("should add two numbers", async () => {
    // await superagent(app)
    //   .get("/")
    //   .expect(200);
  });
});
