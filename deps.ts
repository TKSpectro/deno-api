export * as logger from "https://deno.land/std@0.196.0/log/mod.ts";

// @deno-types="npm:@types/express@4"
export { Router } from "npm:express@4.18.2";
export type {
  Application,
  NextFunction,
  Request,
  Response,
} from "npm:express@4.18.2";

// Testing
export * as chai from "https://cdn.skypack.dev/chai@4.3.4?dts";
export {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "https://deno.land/std@0.196.0/assert/mod.ts";
export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.196.0/testing/bdd.ts";
export { superdeno } from "https://deno.land/x/superdeno@4.8.0/mod.ts";
export { default as superagent } from "https://jspm.dev/superagent@6.1.0";
