import { Base } from "./Base";

export class FilterBuilder extends Base {
  eq(column: string, value: string) {
    this.query += ` WHERE ${column} = '${value}'`;
    return this;
  }
}