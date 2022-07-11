import { Pool } from "pg";

export class QueryBuilder {
  pool: Pool;
  from: string;
  query = "";
  constructor(uri: string, from: string) {
    this.pool = new Pool({ connectionString: uri });
    this.from = from;
  }

  select(column: string) {
    if (column.length < 1) throw new Error("You must provide a colum or columns name");
    this.query = `SELECT ${column} FROM ${this.from}`
    return this;
  }

  async run() {
    const result = await this.pool.query(this.query);
    return result;
  }
}