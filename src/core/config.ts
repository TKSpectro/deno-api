import { envLoad } from "../../deps.ts";

const env = await envLoad();

export const DENO_MODE = env["DENO_MODE"] || "development";
export const APP_PORT = Number(env["APP_PORT"]) || 3000;
