import path from "path";
import * as dotenv from "dotenv";
import { PSQL } from "../src/Client";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

test("Returns something on a products table with a product_name column", async () => {
  const psql = new PSQL(process.env.PSQL_URI);
  const { rows } = await psql.from("products").select("*").eq("product_name", "React");
  console.log(rows);
  expect(rows[0].product_name).not.toBeUndefined();
});
