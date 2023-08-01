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

describe("main", () => {
  let app: Application;
  beforeAll(() => {
    app = setupApp();
  });

  it("root should return 200", async () => {
    const req = await superoak(app);
    const res = await req.get("/");

    res.status.should.equal(200);
    res.body.should.deep.equal({ message: "Hello world!" });
  });

  it("accounts root should return 200", async () => {
    const req = await superoak(app);
    const res = await req.get("/accounts");

    res.status.should.equal(200);
    res.body.should.deep.equal({ message: "Hello accounts!" });
  });
});
