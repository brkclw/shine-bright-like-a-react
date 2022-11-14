import { QueryBuilder } from "./query-builder";

describe("tst", () => {
  it("with sort", async () => {
    const query = new QueryBuilder()
      .withSearch()
      .withLimiter("stars", ">", 1000)
      .withSort({ field: "name", order: "ascend" })
      .build();

    const expectedResult = "topic:react stars:>1000 sort:name-asc";
    expect(query).toEqual(expectedResult);
  });

  it("with empty sort", async () => {
    const query = new QueryBuilder()
      .withSearch()
      .withLimiter("stars", ">", 1000)
      .withSort()
      .build();

    const expectedResult = "topic:react stars:>1000";
    expect(query).toEqual(expectedResult);
  });

  
  it("with custom query", async () => {
    const query = new QueryBuilder()
      .withSearch("some nice query")
      .withLimiter("stars", ">", 1000)
      .build();

    const expectedResult = "topic:react some nice query stars:>1000";
    expect(query).toEqual(expectedResult);
  });
});
