import { Pool, Query, QueryResult } from "pg";

export class Base {
  query!: string;
  uri!: string;
  pool: Pool;
  constructor(builder: Base) {
    Object.assign(this, builder);
    this.pool = new Pool({ connectionString: this.uri });
  }

  then(
    onFullfill?:
      | ((value: QueryResult<any>) => QueryResult<any> | PromiseLike<QueryResult>)
      | undefined
      | null,
    onReject?: ((reason: any) => QueryResult | PromiseLike<QueryResult>) | undefined | null
  ) {
    const response = this.pool.query(this.query)
      .then((res) => {
        return res;
      })

    return response.then(onFullfill, onReject)
  }
}