import {
  Application,
  beforeAll,
  chai,
  describe,
  it,
  superoak,
} from "../deps.ts";
import { setupApp } from "./core/app.ts";

export function add(a: number, b: number): number {
  return a + b;
}

chai.should();

describe("GET root", () => {
  let app: Application;
  beforeAll(() => {
    app = setupApp();
  });

  it("should return 200", async () => {
    const req = await superoak(app);
    const res = await req.get("/");

    res.status.should.equal(200);
    res.body.should.deep.equal({ message: "Hello world!" });
  });
});
