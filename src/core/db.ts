import { edgedb, exec } from "../../deps.ts";
import { DENO_MODE } from "./config.ts";

export let db: edgedb.Client;

export const setupDatabase = async () => {
  if (DENO_MODE === "test") {
    const client = edgedb.createClient();
    try {
      await client.execute("DROP DATABASE test");
    } catch (_error) {
      // do nothing
    }
    await client.execute("CREATE DATABASE test");

    await client.close();

    await exec("edgedb migrate --database=test");
  }

  db = edgedb.createClient(
    DENO_MODE === "test"
      ? {
        database: "test",
      }
      : {},
  );
};
