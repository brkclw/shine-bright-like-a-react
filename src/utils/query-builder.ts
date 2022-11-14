import { Repository } from "./../graphql-types";
import { SorterResult } from "antd/lib/table/interface";

class Query {
  public search!: string;
  public limiter!: string;
  public sort!: string;
}

const TableSortToAPI = {
  ascend: "asc",
  descend: "desc",
};

const ColumnSortToAPI: Record<string, string> = {
  stargazerCount: "stars",
  forkCount: "forks",
  name: "name",
};
const DEFAULT_TOPIC = "topic:react";

export class QueryBuilder {
  private _query = new Query();

  withSearch(search?: string) {
    if (search) {
      this._query.search = `${DEFAULT_TOPIC} ${search}`;
    } else {
      this._query.search = `${DEFAULT_TOPIC}`;
    }
    return this;
  }

  withLimiter(limiter: string, operator: ">" | "<", count: number) {
    this._query.limiter = `${limiter}:${operator}${count}`;
    return this;
  }

  withSort(sort?: SorterResult<Repository>) {
    if (sort && sort.order && sort.field) {
      this._query.sort = `sort:${ColumnSortToAPI[sort.field.toString()]}-${
        TableSortToAPI[sort.order]
      }`;
    } else {
      this._query.sort = "";
    }
    return this;
  }

  build(): string {
    const query = [this._query.search, this._query.limiter, this._query.sort]
      .join(" ")
      .trim();
    return query;
  }
}
