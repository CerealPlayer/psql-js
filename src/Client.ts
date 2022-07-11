import { QueryBuilder } from "./QueryBuilder";

export class PSQL {
  uri: string;
  constructor(uri: string) {
    this.uri = uri;
  }

  from(table: string) {
    if (table.length < 1) throw new Error("You must provide a table name");
    return new QueryBuilder(this.uri, table);
  }
}