import { FilterBuilder } from "./FilterBuilder"
import { Base } from "./Base"

export class QueryBuilder extends Base {
  from: string;
  query = "";
  constructor(uri: string, from: string) {
    super({ uri } as Base);
    this.from = from;
  }

  select(column: string) {
    if (column.length < 1) throw new Error("You must provide a colum or columns name");
    this.query = `SELECT ${column} FROM ${this.from}`
    return new FilterBuilder(this);
  }
}